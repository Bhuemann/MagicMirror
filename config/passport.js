//import passport strategy dependencies
var localStrategy = require('passport-local').Strategy;
var googleStrategy = require('passport-google-oauth').OAuth2Strategy;

//get user model
var User = require('../app/models/user');

//load google credentials
var configAuth = require('./auth');

module.exports = function(passport) {
	//session setup
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	/** Local account----------------------------------------------------------*/
	//signup
	passport.use('local-signup', new localStrategy({
		usernameField : 'username',
		passwordField : 'password',
		passReqToCallback : true
	},

	function(req, username, password, done) {
		process.nextTick(function() {
			//find user if they exist
			User.findOne({'username' : username}, function(err, user) {
				if (err) {
					//return error if any found
					return done(err);
				}

				if (user) {
					//user already exists
					return done(null, false, req.flash('signupMessage', 'That username already exists'));
				} else {
					//username is available
					var newUser = new User();

					//add user info
					newUser.username = username;
					newUser.password = newUser.generateHash(password);
					newUser.activeGame = false;
					newUser.hasOpponent = false;

					//save user
					newUser.save(function(err) {
						if (err) {
							throw err;
						}

						return done(null, newUser);
					});
				}
			});
		});
	}));

	//login
	passport.use('local-login', new localStrategy({
		usernameField : 'username',
		passwordField : 'password',
		passReqToCallback : true
	},
	function (req, username, password, done) {
		//find user
		User.findOne({
			'username' : username
		}, function(err, user) {
			//handle errors, if any
			if (err) {
				return done(err);
			}

			//if no user found, deal with it here
			if (!user) {
				return done(null, false, req.flash('loginMessage', 'Username not found.'));
			}

			//deal with wrong password
			if (!user.validPassword(password)) {
				return done(null, false, req.flash('loginMessage', 'Incorrect password.'));
			}

			//user is found. Set activeGame to false and continut
			user.activeGame = false;
			user.hasOpponent = false;
			user.save(function(err) {
				if (err) {
					throw err;
				}

				return done(null, user);
			});
		});
	}));

	/** Google account----------------------------------------------------------*/
	passport.use(new googleStrategy({
		clientID        : configAuth.web.client_id,
	    clientSecret    : configAuth.web.client_secret,
	    callbackURL     : configAuth.web.redirect_uris[0]
	},
	function(token, refreshToken, profile, done) {
		process.nextTick(function() {
			User.findOne({ 'google.id' : profile.id}, function(err, user) {
				if (err) {
					return done(err);
				}

				if (user) {
					//user found, move on.
					return done(null, user);
				} else {
					//this is a new user. Add them to the database
					var newUser = new User();

					//add google info to new user
					newUser.google.id = profile.id;
					newUser.google.token = token;
					newUser.google.name = profile.displayName;

					//save user
					newUser.save(function(err) {
						if (err) {
							throw err;
						}
						return done(null, newUser);
					});
				}
			});
		});
	}));
};