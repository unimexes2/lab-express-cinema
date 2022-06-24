const mongoose = require("mongoose");

// aqui creamos el Schema
const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // este elemento es obligatorio, si no, error!
    unique: true // este elemento no puede repetirse, si se fuese a repetir, error!
  },
  director: {
    type: String,
    required: true, // este elemento es obligatorio, si no, error!
     },
    
  stars: [
    {
      type: String,
      enum: []
    }
  ],


  image: {
    type: String,
    required: true, // este elemento es obligatorio, si no, error!
     },

     descrription: {
        type: String,
       // este elemento es obligatorio, si no, error!
         },
  
  showtimes: [
    {
      type: String,
      enum: []
    }
  ]
});

// crear el Model
const MoviesModel = mongoose.model("movie", moviesSchema );
// mongoose.model(nombreDelModelo, schemaDelModelo)
// "student" indica como se llamara nuestra colección => "students"

module.exports = [MoviesModel,mongoose];
