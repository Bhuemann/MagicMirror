'use strict';

//require core external libraries
var express = require('express')
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

//require helper libraries
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//database config file
var configDB = require('./config/database.js');

//setup database
mongoose.connect(configDB.url);//connect to our DB

//configure passport
require('./config/passport')(passport);

//setup express
app.use(morgan('dev')); //log every request to the console
app.use(cookieParser()); //read cookies
app.use(bodyParser()); //read html forms
app.use(express.static('frontEnd'));
app.set('view engine', 'ejs'); //setup ejs for templating

//setup passport
app.use(session({ secret: 'RavenclawAllDay'}));//session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash()); //use for flash messages

//setup routes
require('./app/routes.js')(app, passport);

app.listen(8888, function() {
	console.log("Express listening on port 8888");
});
