const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// This schema defines the structure of the campground documents in the MongoDB collection
const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,   
    location: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);