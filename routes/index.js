const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log('Movies finded ', movies);
      res.render('movies', { movies });
    })
    .catch((error) => {
      console.log('An error occurred ', error);
    });
});

router.get('/movie/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .then((movie) => {
      console.log('Movie finded', movie)
      res.render('movie', movie);
    })
    .catch((error) => {
      console.log('An error occurred', error);
    })
})

module.exports = router;
