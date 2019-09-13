const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
const movieController=require('../controller/movieController');
const theater=require('../controller/theaterController');
const bookseat=require('../controller/bookedSeatsController');
//login
router.post('/login', controller.login);
router.get('/moviesList',movieController.getAllMovies);
router.post('/theaterList',theater.getAllTheaters);
router.post('/bookSeat',bookseat.bookController);
module.exports = router;
