# express-api-exercise

This is an exercise which's part of  in order to complete the course: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb. 


# Instructions of this exercise are:

You will create a RESTful API for an online recipe app using Express, Node, and MongoDB.  Your Express app will be served up by a Node server running on port 3000, and it will be connected to a MongoDB Atlas cluster.  You will be implementing the following endpoints:

GET  /api/recipes  — returns all recipes in database
GET  /api/recipes/:id  — returns the recipe with the provided ID from the database
POST  /api/recipes  — adds a new recipe to the database
PUT  /api/recipes/:id  — modifies the recipe with the provided ID
DELETE  /api/recipes/:id  — deletes the recipe with the provided ID
The front end app has already been built, and can be pulled from the following repo:

https://github.com/OpenClassrooms-Student-Center/5614116-go-fullstack-recipe-frontend.git

It can be run in the same way as the course example app, by first running  npm install , and then  ng serve  (requires the Angular CLI).


# Deliverables

You will provide the URL to a Git repo containing your project.  Your project will contain at least:

a server.js file containing your Node server
an app.js file containing your Express app
a package.json file containing all necessary dependencies
a models folder, containing a Recipe model (Mongoose)
After cloning (and an  npm install  ), your app must run with the command "  node server  " or "  nodemon server . "  The marker will be running the front end app in parallel, and it must work seamlessly with your API.