module.exports = function (app, passport) {

	const bcrypt = require('bcrypt');
	const saltRounds = 10;
	const salt = bcrypt.genSaltSync(saltRounds);

	console.log('Authentication routes');

	const db = require('../app/db');

	app.get('/auth/success', function (req, res) {
		res.send('Congratulations, you\'ve signed in');
	});

	app.get('/auth/middle', function (req, res) {

		res.redirect('/profile');
	});

	app.get('/auth/google', passport.authenticate('google', {
		scope: ['https://www.googleapis.com/auth/plus.login']
	}));

	app.get('/auth/google/callback',
		passport.authenticate('google', {
			failureRedirect: '/login',
			successRedirect: 'http://localhost:3000/products'
		}),
		function (req, res) {
			console.log('Authenticated');
			res.redirect('/profile', passport.middleware());
		});

	app.get('/auth/check', function (req, res) {
		let data = {
			auth: req.isAuthenticated()
		};

		if (req.user) {
			data.id = req.user.id;
			data.displayName = req.user.displayName;
		}

		res.json(data);
	});

	app.get('/auth/getUser', function (req, res) {
		if (req.user) {
			return req.user.displayName;
		} else {
			return null;
		}
	});

	app.get('/auth/facebook', passport.authenticate('facebook'));


	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect: '/profile',
			failureRedirect: '/login'
		}));

	app.post('/auth/adduser', (req, res) => {

		bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
			let user = req.body;
			user.password = hash;
			user.usertype='local';

			db.User.create(user, (err, response) => {
				if (!error) {
					res.send('Success');
				} else {
					console.log(error);
				}

			})
		});

	});

	app.post('/auth/login', passport.authenticate('local', {
		successRedirect: '/profile',
		failureRedirect: '/'
	}));

	app.get('/auth/logout', function(req, res){
		req.logout();
		res.redirect('/');
	  });
}