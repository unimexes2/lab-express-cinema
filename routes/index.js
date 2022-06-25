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


});

router.get("/movie", (req, res, next) => {

  Movie.findById(req.query.id)
    .then((response) => {
      console.log(response);
      res.render("movie.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });

  
});


module.exports = router;
