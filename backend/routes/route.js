const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
const movieController=require('../controller/movieController');
const theater=require('../controller/theaterController');
//login
router.post('/login', controller.login);
router.post('/moviesList',movieController.getAllMovies);
router.post('/theaterList',theater.getAllTheaters);
module.exports = router;
