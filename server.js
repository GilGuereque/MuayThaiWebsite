// Set up express app variables & PORT
const express = require('express');
const app = express();
const PORT = 5050;

// Set up mongoose & config database connection
// const mongoose = require('mongoose');
// const passport = require('passport');
// const connectDB = require('./config/database')

// Setting up middleware for Express
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initial GET request
app.get('/', (req,res) => {
    try {
        res.render('index.ejs')
    } catch (error) {
        console.error(error)
        res.status(500).send('500 HTTP Status code. A server error has occurred from the GET request.');
    }
});

// Set up PORT connection
app.listen(PORT || process.env.PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
});