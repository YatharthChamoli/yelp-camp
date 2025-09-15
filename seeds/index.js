const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers'); 

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
    console.log('Connected to MongoDB successfully!');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async (req, res) => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '68b9cda9a3718554c307d320',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            price,
            geometry: {
                type: 'Point',
                coordinates: [
                  cities[random1000].longitude, 
                  cities[random1000].latitude
                ]
            },
            images: [
                  {
                    url: 'https://res.cloudinary.com/dz5hi7din/image/upload/v1757872280/YelpCamp/g2czvoqjkvzau86tfiuq.jpg',
                    filename: 'YelpCamp/g2czvoqjkvzau86tfiuq',
                  },
                  {
                    url: 'https://res.cloudinary.com/dz5hi7din/image/upload/v1757872284/YelpCamp/r6z718qbmzykbdyhigeu.jpg',
                    filename: 'YelpCamp/r6z718qbmzykbdyhigeu',
                  }
            ]
        })  
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
    console.log('Database seeded and connection closed!'); 
}) 