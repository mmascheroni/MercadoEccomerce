const express = require('express');
const app = express();

// Routes
let routeLogin = require('./routes/login.js');
let routeRegister = require('./routes/register.js');
let routeHome = require('./routes/home.js');

app.listen(3000);

// Allow access to files in public folder
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', routeLogin);

// Route Login
app.use('/login', routeLogin);

// Route Register
app.use('/register', routeRegister);

// Route Home
app.use('/home', routeHome);
