const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
const movieController=require('../controller/movieController');
//login
router.post('/login', controller.login);
router.post('/moviesList',movieController.getAllMovies);
module.exports = router;
