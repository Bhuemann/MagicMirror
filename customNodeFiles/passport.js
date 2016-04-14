//Configure dependencies
var googleStrategy = require('passport-google-oauth').OAuth2Strategy;
var auth = require('./auth');
console.log(auth);
var MongoClient = require('mongodb').MongoClient;
var mongoURI = 'mongodb://randypitcherii:database@ds023510.mlab.com:23510/misc'

function gStrategy(passport) {
	passport.use(new googleStrategy({
		clientID        : auth.web.client_id,
	    clientSecret    : auth.web.client_secret,
	    callbackURL     : auth.web.redirect_uris[0]
	},
	function (token, refreshToken, profile, done) {
		console.log(profile);
		//find the user based on google id
		MongoClient.connect(mongoURI, function(err, connection) {
			var collection = connection.collection('users');

			var userEntry = collection.find({'username': profile.id}).toArray(function (err, response) {
				//console.dir(response); //uncomment this to debug the database
				if (response.length === 0) {
					//add user to database
					console.log("Successful login. Adding google id to db.");	

					collection.insert({'username': profile.id, 'token': token,
										'name': profile.displayName},
						function (err, count) {
							console.log(profile.displayName + " added as new google user");
							return done();
						}
					);
				} else {
					console.log("Successful login.");	
					return done();
				}
			});
		});
	}));
}

exports.gStrategy = gStrategy;