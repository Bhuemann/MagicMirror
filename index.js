'use strict';

var express = require('express');
var ourDB = require("./customNodeFiles/databaseHandler")
var app = express();
var passport = require('passport');

//Configure google authentication dependencies
var strategy = require('./customNodeFiles/passport.js');
strategy.gStrategy(passport);


app.get('/', function(req,res) {
	console.log("Recieved initial connection.")
	res.sendFile(__dirname+'/frontEnd/login.html');
});

app.get('/login', function(req,res) {
	console.log("login request received");
	ourDB.login(req.query, res);
});

app.get('/newUser', function(req,res) {
	console.log("newUser request received");
	ourDB.newUser(req.query, res);
});

app.get('/google-login', passport.authenticate('google', { scope : ['profile', 'email'],
	failureRedirect: 'login.html' }));


app.use(express.static('frontEnd'));

app.listen(8888, function() {
	console.log("Express listening on port 8888");
});
