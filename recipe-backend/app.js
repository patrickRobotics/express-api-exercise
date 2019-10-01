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

app.use((req, res) => {
    res.json({ message: 'Your request was successful!' }); 
 });
 
module.exports = app;