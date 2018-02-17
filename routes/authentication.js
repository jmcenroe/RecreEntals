module.exports = function (app, passport) {

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
			successRedirect: 'http://localhost:3000/profile'
		}),
		function (req, res) {
			console.log('Authenticated');
			res.redirect('/profile', passport.middleware());
		});

	app.get('/auth/test', function (req, res) {

	});

	app.get('/auth/facebook', passport.authenticate('facebook'));


	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect: '/profile',
			failureRedirect: '/login'
		}));


}