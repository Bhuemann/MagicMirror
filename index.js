'use strict';

var express = require('express');
var ourDB = require("./customNodeFiles/databaseController")
var app = express();


app.get('/', function(req,res) {
	console.log("Recieved initial connection.")
	res.sendFile(__dirname+'/frontEnd/login.html');
});

app.get('/login', function(req,res) {
	console.log("login request received");
	res.send("good to go");
});

app.get('/newUser', function(req,res) {
	console.log("newUser request received");
	console.log(req.body);
	res.sendFile(__dirname+'/frontEnd/index.html');
});

app.use(express.static('frontEnd'));

app.listen(8888, function() {
	console.log("Express listening on port 8888");
});
