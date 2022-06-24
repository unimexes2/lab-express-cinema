const router = require("express").Router();
const Pokemon = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => {
  
  debugger
  console.log(res)
  let title="hghbk"
  res.render("index",{title});
});

router.get("/pokemons", (req, res, next) => {
  // buscar los nombres de los pokemon de mi BD
  // buscamos en la DB los documentos de la coleción de pokemons
  Pokemon.find()
    .then((response) => {
      console.log(response);
      res.render("pokemon-list.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });

  // mostrar una vista a el cliente con los nombres de pokemons
});

router.get("/pokemons/:id", (req, res, next) => {
  // aplicar destructuracion sobre req.params

  // acceder a cada pokemon
  Pokemon.findById(req.params.id)
    .then((response) => {
      console.log(response);
      res.render("pokemon-details.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });

  // renderizar la pagina
});

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

module.exports = router;
