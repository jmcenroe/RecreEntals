module.exports = function (app, passport) {

	const bcrypt = require('bcrypt');
	const saltRounds = 10;
	const salt = bcrypt.genSaltSync(saltRounds);

	console.log('Authentication routes');

	const db = require('../app/db');

	app.get('/auth/success', function (req, res) {
		console.log('this hits it');
		res.send('Congratulations, you\'ve signed in');
	});

	app.get('/auth/google/callback',
		passport.authenticate('google', {
			failureRedirect: '/login',
			successRedirect: '/products'
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
			data.imageURL = req.user.imageURL;
		}

		res.json(data);
	});

	app.get('/auth/getUser/:id', function (req, res) {
		db.User.findOne({
			where: {
				id: req.params.id
			},
			attributes: ['createdAt', 'displayName', 'email', 'id', 'imageURL', 'phone']
		}).then(data => {
			res.json(data);
		})
	});

	app.get('/auth/facebook', passport.authenticate('facebook'));


	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect: '/products',
			failureRedirect: '/login'
		}));

	app.get('/auth/middle', function (req, res) {

		res.redirect('/profile');
	});

	app.get('/auth/google', passport.authenticate('google', {
		scope: ['https://www.googleapis.com/auth/plus.login']
	}));





	app.post('/auth/adduser', (req, res) => {

		bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
			let user = req.body;
			user.password = hash;
			user.usertype = 'local';

			db.User.create(user, (err, response) => {
				if (!error) {
					res.redirect('/profile');
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

	app.post('/auth/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});
	console.log('auth routes loaded');
}