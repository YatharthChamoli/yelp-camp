const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds'); 
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const {isLoggedIn, validateCampground, isAuthor} = require('../middleware');
const multer  = require('multer');
const { storage } = require('../cloudinary'); // adjust path
const upload = multer({ storage : storage });

// Route definitions for campgrounds

router.route('/')
      .get( catchAsync(campgrounds.index))
      .post( isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground));

router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.route('/:id')
      .get(catchAsync(campgrounds.showCampground))
      .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground))  
      .delete( isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));
      

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));


// Export the router to be used in the main application

module.exports = router;