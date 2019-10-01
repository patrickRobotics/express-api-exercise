const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Recipe = require('./models/recipe');

const app = express();

mongoose.connect(
    'mongodb+srv://app-user:%23zesV9Mr2T8P@boilerplate-tutorial-ejrbw.mongodb.net/test?retryWrites=true&w=majority', 
    { useNewUrlParser: true }
)
.then(() => {
    console.log('Connected successfully to MongoDB Atlas!');
})
.catch((error) => {
    console.log('Unable to connect to MongoDB');
    console.error(error);
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.post('/api/recipes', (req, res, next) => {
    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        difficulty: req.body.difficulty,
        time: req.body.time
    });
    recipe.save().then(
      () => {
            res.status(201).json({
                message: 'Recipe created successfully!'
            });
      }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});
 
app.get('/api/recipes/:id', (req, res, next) => {
    Recipe.findOne({
        _id: req.params.id
      }).then(
        (recipe) => {
          res.status(200).json(recipe);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
      );
});

app.put('/api/recipes/:id', (req, res, next) => {
    const recipe = new Recipe({
        _id: req.params.id,
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        difficulty: req.body.difficulty,
        time: req.body.time
    });
    Recipe.update({_id: req.params.id}, recipe)
    .then(() => {
        res.status(201).json({
            message: 'Recipe updated successfully!'
        });
    })
    .catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
    );
});

app.delete('/api/recipes/:id', (req, res, next) => {
    Recipe.deleteOne({_id: req.params.id})
    .then(() => {
        res.status(200).json({
            message: 'Recipe Deleted!'
        });
    })
    .catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});

app.use('/api/recipes', (req, res, next) => {
    Recipe.find()
    .then((recipes) => {
        res.status(200).json(recipes);
    })
    .catch((error) => {
        res.status(400).json({ error: error });
    });
});

 
module.exports = app;