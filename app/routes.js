var User = require('../app/models/user');

module.exports = function(app, passport) {
	//homepage
	app.get('/', isLoggedIn, function(req, res) {
		//if logged in, send to profile page, otherwise isLoggedIn will handle it
		res.redirect('/home');
	});

	//login
	app.get('/login', function(req, res) {
		//load login page with any flash data if it exists
		res.render('../frontEnd/login.ejs', { message: req.flash('loginMessage') });
	});
	app.get('/login.html', function(req, res) {
		//load login page with any flash data if it exists
		res.redirect('/login');
	});
	//process login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/home',
		failureRedirect : '/login',
		failureFlash : true
	}));

	//signup
	app.get('/createAccount', function(req, res) {
		//load signup page with any flash data if it exists
		res.render('../frontEnd/createAccount.ejs', { message: req.flash('signupMessage') });
	});
	app.get('/createAccount.html', function(req, res) {
		//load login page with any flash data if it exists
		res.redirect('/createAccount');
	});
	//process signup form
	app.post('/createAccount', passport.authenticate('local-signup', {
		successRedirect : '/home',
		failureRedirect : '/createAccount',
		failureFlash : true
	}));

	//go to profile (make sure they're logged in)
	app.get('/home', isLoggedIn, function(req, res) {
		res.render('../frontEnd/index.ejs');
	});
	app.get('/index.html', function(req, res) {
		//load login page with any flash data if it exists
		res.redirect('/home');
	});

	//go to profile (make sure they're logged in)
	app.get('/visualizations', isLoggedIn, function(req, res) {
		res.render('../frontEnd/visualizationsIndex.ejs');
	});
	//go to profile (make sure they're logged in)
	app.get('/visualizationsIndex.html', isLoggedIn, function(req, res) {
		res.redirect('/visualizations');
	});

	//logout
	app.get('/logout', function(req, res) {
		req.user.activeGame = false;
		req.user.save(function(err) {
			req.logout();
			res.redirect('/');
		});		
	});

	//function for checking user is logged in
	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}

		//if not authenticated, redirect to default page
		res.render('../frontEnd/login.ejs');//load default page
	}
};