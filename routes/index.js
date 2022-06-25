const router = require("express").Router();
const Movie = require("../db/index");

/* GET home page */
router.get("/", (req, res, next) => {
  
  //debugger
  console.log(res)
  let title="Cinema Ironhack"
  res.render("index",{title});
});

router.get("/movies", (req, res, next) => {
  
  Movie.find()
    .then((response) => {
      console.log(response);
      res.render("movies.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });

  // mostrar una vista a el cliente con los nombres de pokemons
});

router.get("/movie", (req, res, next) => {
  // aplicar destructuracion sobre req.params
debugger
  // acceder a cada pokemon
  Movie.findById(req.query.id)
    .then((response) => {
      console.log(response);
      res.render("movie.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });

  // renderizar la pagina
});
/*
// router
router.get("/poke-search", (req, res, next) => {
  console.log(req.query.name);

  // debo buscar el pokemon del URL
  Pokemon.findOne({ name: req.query.name })
    .then((response) => {
      console.log(response);
      res.render("pokemon-search.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });
});
*/
module.exports = router;
