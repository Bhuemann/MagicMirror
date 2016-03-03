'use strict';

var express = require('express');
var ourDB = require("./customNodeFiles/databaseHandler")
var app = express();


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

app.use(express.static('frontEnd'));

app.listen(8888, function() {
	console.log("Express listening on port 8888");
});
