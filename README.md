# **YelpCamp** 🏕️

A full-stack web application for discovering and reviewing campgrounds, built with **Node.js**, **Express.js**, and **MongoDB**. Users can create, manage, and review campgrounds, with features like image uploading, interactive maps, and a responsive design.

---

## 📋 **Table of Contents**

* [✨ Features](#-features)
* [🛠️ Technologies Used](#️-technologies-used)
* [📁 Project Structure](#-project-structure)
* [🚀 Installation](#-installation)
* [🔧 Environment Variables](#-environment-variables)
* [📖 Usage](#-usage)
* [🛣️ API Routes](#️-api-routes)
* [🤝 Contributing](#-contributing)
* [🙏 Acknowledgments](#-acknowledgments)

---

## ✨ **Features**

* **User Authentication & Authorization**: Secure user registration, login, and session management with password hashing.
* **Campground Management**: Users can create, read, update, and delete their own campground listings.
* **Image Uploads**: Integrated with **Cloudinary** for seamless image storage and optimization.
* **Interactive Maps**: Campgrounds are displayed on an interactive map, allowing for location-based discovery.
* **Review System**: A dedicated system for users to add reviews and ratings to campgrounds.
* **Responsive Design**: A mobile-friendly and modern user interface built with **Bootstrap**.

---

## 🛠️ **Technologies Used**

### **Backend**

* **Node.js**: A JavaScript runtime environment.
* **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
* **MongoDB**: A document-based NoSQL database.
* **Mongoose**: A MongoDB object modeling tool designed to work in an asynchronous environment.

### **Frontend**

* **EJS (Embedded JavaScript)**: A simple templating engine for generating HTML markup with plain JavaScript.
* **Bootstrap**: A powerful, feature-rich, and customizable open-source toolkit for building responsive web pages.
* **JavaScript**: For dynamic, client-side scripting.

### **Third-party Services**

* **Cloudinary**: For cloud-based image and video management.
* **Maps API**: For interactive maps and location services (e.g., **MapTiler** or **Google Maps API**).

---

## 📁 **Project Structure**
```
YELPCAMP/
├── cloudinary/             # Cloudinary configuration
├── controllers/            # Route controllers
├── models/                 # MongoDB models
├── node_modules/           # Project dependencies
├── public/                 # Static assets (stylesheets, JavaScript files)
├── routes/                 # Express routes
├── seeds/                  # Scripts for database seeding
├── utils/                  # Utility functions
├── views/                  # EJS templates for rendering pages
├── .env                    # Environment variables
├── .gitignore              # Git ignore rules
├── app.js                  # Main application entry file
├── middleware.js           # Custom middleware
├── package-lock.json       # Dependency lock file
├── package.json            # Project configuration
└── schemas.js              # Joi validation schemas
```

---

## 🚀 **Installation**

Follow these steps to get your development environment running:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/yelpcamp.git](https://github.com/yourusername/yelpcamp.git)
    cd yelpcamp
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    * Create a `.env` file in the root directory.
    * Refer to the [Environment Variables](#-environment-variables) section for the required variables.
4.  **Seed the database (optional):**
    ```bash
    node seeds/index.js
    ```
5.  **Start the application:**
    ```bash
    npm start
    ```
6.  **Visit the application:**
    * Open your browser and navigate to `http://localhost:3000`.

---

## 🔧 **Environment Variables**

Create a `.env` file in the root of the project and add the following variables.

```env
# Database
DATABASE_URL=mongodb://localhost:27017/yelpcamp

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret

# Maps API (choose one)
MAPTILER_API_KEY=your_maptiler_api_key

# Session Secret (for secure session management)
SESSION_SECRET=your_session_secret

# Port (optional, defaults to 3000)
PORT=3000
```
---

## 📖 Usage

- **Register/Login**: Create an account or log in to access the full features.  
- **Browse Campgrounds**: View all available campgrounds on the main page.  
- **View Details**: Click on a campground to see detailed information, photos, and reviews.  
- **Add Campground**: Create a new campground listing with photos and location details.  
- **Write Reviews**: Share your experiences by writing reviews and ratings for campgrounds.  
- **Interactive Map**: Use the map feature to explore and discover campgrounds by location.  

---

## 🛣️ API Routes

### 🔐 Authentication Routes
| Method | Endpoint     | Description        |
|--------|-------------|--------------------|
| GET    | /register   | Registration page  |
| POST   | /register   | User registration  |
| GET    | /login      | Login page         |
| POST   | /login      | User authentication|
| POST   | /logout     | User logout        |

---

### 🏕️ Campground Routes
| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| GET    | /campgrounds              | List all campgrounds     |
| GET    | /campgrounds/new          | New campground form      |
| POST   | /campgrounds              | Create new campground    |
| GET    | /campgrounds/:id          | Show specific campground |
| GET    | /campgrounds/:id/edit     | Edit campground form     |
| PUT    | /campgrounds/:id          | Update campground        |
| DELETE | /campgrounds/:id          | Delete campground        |

---

### 📝 Review Routes
| Method | Endpoint                                   | Description         |
|--------|--------------------------------------------|---------------------|
| POST   | /campgrounds/:id/reviews                   | Create new review   |
| DELETE | /campgrounds/:id/reviews/:reviewId         | Delete a review     |

---

## 🤝 Contributing

We welcome contributions! If you'd like to improve the project, please follow these steps:

1. Fork the project.  
2. Create your feature branch:  
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. Push to the branch:  
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request.  

---

## 🙏 Acknowledgments
- Thanks to all contributors who have helped build this project.  
- Inspired by popular campground discovery platforms.  
- Built as part of learning full-stack web development.  









