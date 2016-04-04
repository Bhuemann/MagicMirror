var MongoClient = require('mongodb').MongoClient;
var passwordHasher = require('password-hash-and-salt');

function login(query, res) {
	var username = query.username;
	var password = query.password;

	console.log("Username: " + username);
	console.log("Password: " + password);

	MongoClient.connect('mongodb://127.0.0.1:27017/users', function(err, connection) {
		var collection = connection.collection('users');

		var userEntry = collection.find({'username': username}).toArray(function (err, response) {
			//console.dir(response); //uncomment this to debug the database
			if (response.length === 0) {
				res.send("no user found");
				console.log("no user with username '" + username + "' found in the fucking database.");
			} else {
				var user = response[0];

				passwordHasher(password).verifyAgainst(user.passwordHash, function(error, verified) {
					if (error) {
						console.log("Error verifying password in databaseHandler.");
						return;
					}

					if (verified) {
						res.send("login valid");
						console.log("Successful login.");
					} else {
						res.send("wrong password");
						console.log("Wrong password.");
					}
				});
			}
		});

	});//end connect
}

function newUser(query, res) {
	var username = query.username;
	var password = query.password;

	console.log("New Username: " + username);
	console.log("New Password: " + password);

	passwordHasher(password).hash(function(error, hash) {
		if (error) {
			console.log("Error creating password hash in databaseHandler.js");
			return;
		}

		MongoClient.connect('mongodb://127.0.0.1:27017/users', function(err, connection) {
			var collection = connection.collection('users');

			collection.find({'username': username}).toArray(function (err, response) {
				//console.dir(response); //uncomment this to debug the database
				if (response.length === 0) {
					insertNewUser(username, hash);
				} else {
					res.send("username already exists");
					console.log("Username already exists. New user not created.");
				}
			});

			var insertNewUser = function (username, passwordHash) {
				collection.insert({'username': username, 'passwordHash': passwordHash},
					function (err, count) {
						res.send('user added');
						console.log("New user added!");
					}
				);
			};
		});//end connect*/
	});
}

exports.login = login;
exports.newUser = newUser;