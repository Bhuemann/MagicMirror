var MongoClient = require('mongodb').MongoClient;
var querystring = require("querystring");//used to parse postData
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

function login(query, res) {
	var username = query.username;
	var password = query.password;

	console.log("Username: " + username);
	console.log("Password: " + password);

	MongoClient.connect('mongodb://127.0.0.1:27017/users', function(err, connection) {
		var collection = connection.collection('users');

		var userEntry = collection.find({'username': username}).toArray(function (err, documents) {
			console.dir(documents);
			//res.send("login valid");

			//res.send("wrong password");

			//res.send("no user found");
		});

	});//end connect
}

function newUser(req, res) {
	var username = query.username;
	var password = query.password;

	console.log("New Username: " + username);
	console.log("New Password: " + password);

	MongoClient.connect('mongodb://127.0.0.1:27017/users', function(err, connection) {
		var collection = connection.collection('users');

		collection.find({'username': username}).toArray(function (err, documents) {
			console.dir(documents);
			if (documents === []) {
				insertNewUser(username, password);
			} else {
				res.send("username already exists");
				console.log("This goddamn username already exists! Tell the client to fuckoff");
			}
		});

		var insertNewUser = function (username, password) {
			collection.insert({'username': username, 'password': password},
				function (err, count) {
					res('user added');
					console.log("new user added!");
				});
		};
	});//end connect*/
}

exports.login = login;
exports.newUser = newUser;