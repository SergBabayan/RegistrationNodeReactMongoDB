Registration with Node, React, and MongoDB

This project is a simple registration system built with a Node.js backend, a MongoDB database, and a React frontend. Users can register by providing a username and password, and the data is stored in MongoDB.

Features
- User registration with unique usernames.
- Basic error handling for registration.
- Connection to MongoDB Atlas.
- Simple frontend with React to register users.

Technologies Used
- Backend: Node.js, Express, Mongoose
- Frontend: React, Axios
- Database: MongoDB Atlas
- Others: Body-parser, CORS

Setup Instructions

Prerequisites
Make sure you have Node.js and npm installed on your system.

Backend Setup
1. Clone the repository:
    ```
    git clone https://github.com/SergBabayan/RegistrationNodeReactMongoDB.git
    ```
2. Navigate to the backend folder:
    ```
    cd registration_mongodb
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Start the server:
    ```
    node server.js
    ```
    The server will run on `http://localhost:5000`.

Frontend Setup
1. Navigate to the frontend folder (assuming it’s in the same project):
    ```
    cd client
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the React application:
    ```
    npm start
    ```
    The React app will run on `http://localhost:3000`.

Usage
- Open the React app in your browser.
- Enter a username and password to register.
- On successful registration, you’ll see a success message.

