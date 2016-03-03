'use strict';

var bodyParser = require("body-parser");
var express = require('express');
var app = express();
app.use(bodyParser.json());


app.get('/', function(req,res) {
	res.sendFile(__dirname+'/frontEnd/login.html');
});

app.get('/login', function(req,res) {
	console.log(req.body);
	res.send()	
});

app.use(express.static('frontEnd'));

app.listen(8888, function() {
	console.log("Express listening on port 8888");
});

var MongoClient = require('mongodb').MongoClient;
/*
MongoClient.connect('mongodb://127.0.0.1:27017/accounting', function(err, connection) {
	var collection = connection.collection('demoTable');

	var doFind = function (callback) {
		collection.find({'v':5}).toArray(function (err, documents) {
			console.dir(documents);
			callback();
		});
	};

	var doInsert = function (i) {
		if (i < 20) {
			var value = Math.floor(Math.random() * 10);
			collection.insert(
				{'n': '#' + i, 'v': value},
				function (err, count) {
					doInsert(i + 1);
				});
		} else {
			console.log();
			console.log('Inserted', i, 'documents:');
			doFind(function() {
				doUpdate();
			});
		}
	};

	var doUpdate = function() {
		collection.update(
		{'v': {'$gt': 5}},
		{'$set': {'valuable': true}},
		{'multi': true},
		function(err, count) {
			console.log();
			console.log('Updated', count, 'documents:');
			doFind(function() {
				collection.remove({}, function () {
					connection.close();
				});
			});
		});//end of update
	};

	doInsert(0);
});//end connect*/