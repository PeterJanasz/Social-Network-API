# Social-Network-API

## Table-of-Contents

- [Social-Network-API](#social-network-api)
  - [Table-of-Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Key Components](#key-components)
  - [Installation](#installation)
    - [1. Clone the repo](#1-clone-the-repo)
    - [2. Change your current directory to the project folder](#2-change-your-current-directory-to-the-project-folder)
    - [3. Set Up a MongoDB Database](#3-set-up-a-mongodb-database)
    - [4. Configure Environment Variables](#4-configure-environment-variables)
    - [5. Run the Server](#5-run-the-server)
  - [Usage](#usage)
  - [Screenshot](#screenshot)
  - [Walk through video](#walk-through-video)
  - [Technologies](#technologies)
  - [License](#license)
  - [Questions](#questions)


## [Description](#table-of-contents)

The Social Network API is a robust and flexible backend application built with Node.js, Express.js, and MongoDB using Mongoose. It provides the foundation for building a social network or community-oriented platform where users can create and manage thoughts, reactions, and friends.

## [Features](#features)
**Thought Management**: Users can create, read, update, and delete thoughts. Each thought can have associated reactions, offering a way for users to engage with one another's thoughts.

- **User Profiles**: Users can create and manage their profiles. They can also add and remove friends from their friend list.

- **RESTful API**: The application follows a RESTful API design, making it easy to interact with and integrate into other applications or front-end frameworks.

## [Key Components](#key-components) 

**Express Server**: The core of the application is an Express.js server, which listens for incoming HTTP requests and routes them to the appropriate handlers.

- **Mongoose Models**: The application uses Mongoose schemas and models to interact with a MongoDB database. It enables structured data storage and retrieval.

- **Middleware**: Middleware functions are used to handle requests and responses, validate data, authenticate users, and more. They are instrumental in the request-response cycle.

- **Route Definitions**: Routes are defined for thoughts and users. These routes specify the endpoints for various CRUD operations and user interactions.

## [Installation](#table-of-contents)

### 1. Clone the repo
  - git clone https://github.com/PeterJanasz/Social-Network-API

### 2. Change your current directory to the project folder 
   - cd social-network-api

### 3. Set Up a MongoDB Database
Ensure that you have a MongoDB database set up. You can choose to use a local MongoDB instance or a cloud-based service like MongoDB Atlas.

- If you're using MongoDB locally, make sure your local MongoDB server is running.

- If you're using MongoDB Atlas or another cloud-based service, obtain your database connection URI.

### 4. Configure Environment Variables
 Use the terminal to run the command npm i to install the dependencies associated with this application.

   Commands to install each dependency:

   - Command for express npm i express@4.18.2
   - Command for mongoose npm i mongoose
   - Command for nodemon npm i nodemon
   - Command for jest npm i jest

### 5. Run the Server
Start the Express.js server by running the following command:
   - npm start

## [Usage](#table-of-contents)

Use API requests (e.g., POST, GET, PUT, DELETE) to interact with the application. Refer to the API routes for detailed usage instructions.

## [Screenshot](#table-of-contents)

![Screenshot of App](/assets/Screenshot%202023-11-01%20at%202.27.25 PM.png)

## [Walk through video](#walk-through-video)

[Video](https://drive.google.com/file/d/1gXAJ9Q0jnv7QzwX-T75D3hUXhJZqsHd3/view)

## [Technologies](#technologies)

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Insomnia](https://insomnia.rest/)
- [Moment.js](https://www.npmjs.com/package/moment)

## [License](#license)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## [Questions](#table-of-contents)

Please contact me with any questions!

Contact information:

[Project GitHub](https://github.com/PeterJanasz/Social-Network-API)

[Peter Janasz GitHub](https://github.com/PeterJanasz)

[Email: petertjanasz@gmail.com](mailto:petertjanasz@gmail.com)



