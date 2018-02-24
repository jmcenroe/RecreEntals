module.exports = function (app, passport) {

	const bcrypt = require('bcrypt');
	const saltRounds = 10;
	const salt = bcrypt.genSaltSync(saltRounds);

	console.log('Authentication routes');

	const db = require('../app/db');

	app.post('/auth/success', function (req, res) {
		console.log('this hits it');
		res.send('Congratulations, you\'ve signed in');
	});



	
	


	app.post('/auth/adduser', (req, res) => {

		bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
			let user = req.body;
			user.password = hash;
			user.usertype='local';

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

	app.post('/auth/logout', function(req, res){
		req.logout();
		res.redirect('/');
	  });
	  console.log('auth routes loaded');
}