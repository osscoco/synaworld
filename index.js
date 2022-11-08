//REQUIEREMENTS
const path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const http = require('http'); 
require('dotenv').config();
const PORT = process.env.PORT;

//APP CREATION IN EXPRESS MODULE
const express = require('express');
const app = express();
const server = http.createServer(app);

//SET VIEWS IN EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// SET THE PORT
app.set('port', PORT);

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(cookieParser());

//SET PUBLIC AS REPOSITORY FOR IMG,CSS,JS ect
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));
app.use('/nitro/public', express.static('public'));

//Routes
var HomeRoute = require('./routes/homeRoute');
app.use('/', HomeRoute);

// LISTEN ON SPECIFIED PORT
server.listen(PORT);

console.log("Le serveur tourne sur le port : " + PORT);

module.exports = app;