// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const MONGODB_URI = 'mongodb://localhost:27017/movies';
const arrayOfMovie = require("../seeds/movies.seed");
//console.log(arrayOfMovie,"ttttt")
const movieModelObj = require("../models/Movie.model");
const Movie=movieModelObj[0];

mongoose
 .connect(MONGODB_URI)
  .then(x => {
    //console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Movie.deleteMany()
  })
  .then((response) => {
   
    return Movie.create(arrayOfMovie);
    // Run your code here, after you have insured that the connection was made
  })
  .then((response) => {
   
   // console.log(response)
  })
// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app
