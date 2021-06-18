# Image Stacking application

## Table of contents:

- **[About the project](#about-the-project)**
- **[Technologies used](#technologies-used)**
- **[Features](#features)**
- **[Steps to run the project](#steps-to-run-the-project)**

## About the project

This application shows the possible variations of a two-dimensional array of images as layers, such that every image from each row of the array is stacked on top of every other image. This repository contains only the front-end code of the application. To check the backend code, visit [Backend code](https://github.com/sushmitha-b-s/image-stack-server)

## Technologies used

- Frontend
  - HTML5, CSS3, SCSS, JavaScript, Vue.js and Vuex.
- Backend
  - PHP, MySQL and Laravel 8.0

## Features

- One variation includes 4 image layers stacked on top of each other where images are either png/transparent type.
- As a user, the first image upload must be of the base layer (1.e, Array index 0).
- The user can add upto 4 layers of images.
- The user can add a new image by selecting the array index (which specifies the layer) and uploading an image.
- The user can regenerate other possible variations using regenerate button.

## Steps to run the project

1. First, make sure to setup the [Backend](https://github.com/sushmitha-b-s/image-stack-server).
2. Clone the repository.
   ```
   $ git clone git@github.com:sushmitha-b-s/image-stack-client.git
   $ cd image-stack-client
   ```
3. Install node dependencies.
   ```
   $ npm install
   ```
4. Run the below command.
   ```
   $ npm run serve --port=8080
   ```
