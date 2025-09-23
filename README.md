YelpCamp 🏕️
A full-stack web application for campground reviews and discovery, built with Node.js, Express.js, and MongoDB.
📋 Table of Contents

Features
Technologies Used
Project Structure
Installation
Environment Variables
Usage
API Routes
Contributing
License

✨ Features

User Authentication & Authorization

User registration and login
Password hashing and security
Session management


Campground Management

Create, read, update, and delete campgrounds
Image upload and management with Cloudinary
Interactive maps integration
Location-based services


Review System

Add and manage campground reviews
Rating system
User-specific review permissions


Interactive Maps

Visual campground locations
Map-based campground discovery


Responsive Design

Mobile-friendly interface
Modern UI/UX



🛠️ Technologies Used
Backend

Node.js - Runtime environment
Express.js - Web application framework
MongoDB - NoSQL database
Mongoose - MongoDB object modeling

Frontend

EJS - Templating engine
Bootstrap - CSS framework
JavaScript - Client-side scripting

Third-party Services

Cloudinary - Image storage and optimization
Maps API - Interactive maps and location services

Development Tools

npm - Package manager
Git - Version control

📁 Project Structure
YELPCAMP/
├── cloudinary/          # Cloudinary configuration
├── controllers/         # Route controllers
├── models/             # MongoDB models
├── node_modules/       # Dependencies
├── public/             # Static assets
├── routes/             # Express routes
├── seeds/              # Database seeding
├── utils/              # Utility functions
├── views/              # EJS templates
├── .env                # Environment variables
├── .gitignore         # Git ignore rules
├── app.js             # Main application file
├── middleware.js      # Custom middleware
├── package-lock.json  # Dependency lock file
├── package.json       # Project configuration
└── schemas.js         # Validation schemas
🚀 Installation

Clone the repository

bash   git clone https://github.com/yourusername/yelpcamp.git
   cd yelpcamp

Install dependencies

bash   npm install

Set up environment variables
Create a .env file in the root directory and add the required variables (see Environment Variables)
Seed the database (optional)

bash   node seeds/index.js

Start the application

bash   npm start

Visit the application
Open your browser and navigate to http://localhost:3000

🔧 Environment Variables
Create a .env file in the root directory and include the following variables:
env# Database
DATABASE_URL=mongodb://localhost:27017/yelpcamp
# or for MongoDB Atlas:
# DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/yelpcamp

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret

# Maps API
MAPBOX_TOKEN=your_mapbox_token
# or
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Session Secret
SESSION_SECRET=your_session_secret

# Port (optional, defaults to 3000)
PORT=3000
📖 Usage

Register/Login: Create an account or login to access full features
Browse Campgrounds: View all available campgrounds on the main page
View Details: Click on any campground to see detailed information, photos, and reviews
Add Campground: Create new campground listings with photos and location
Write Reviews: Share your experiences by writing reviews and ratings
Interactive Map: Use the map feature to explore campgrounds by location

🛣️ API Routes
Authentication Routes

GET /register - Registration page
POST /register - User registration
GET /login - Login page
POST /login - User authentication
POST /logout - User logout

Campground Routes

GET /campgrounds - List all campgrounds
GET /campgrounds/new - New campground form
POST /campgrounds - Create new campground
GET /campgrounds/:id - Show specific campground
GET /campgrounds/:id/edit - Edit campground form
PUT /campgrounds/:id - Update campground
DELETE /campgrounds/:id - Delete campground

Review Routes

POST /campgrounds/:id/reviews - Create new review
DELETE /campgrounds/:id/reviews/:reviewId - Delete review

🤝 Contributing

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

Thanks to all contributors who helped build this project
Inspired by popular campground discovery platforms
Built as part of learning full-stack web development