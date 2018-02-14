var express = require("express");
var router = express.Router();
var db = require('../app/db');
var path = require('path');
var passport = require('../modules/passport/passport');

// Launches shop
router.route('/:username').get(function (req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});

//Update user information
router.put('/user/update', function (req, res) {

	db.User.update(
		req.body, {
			where: {
				username: req.body.username
			}
		}).then((data) => {

		res.json(data);
	});

});

//Find existing user data
router.get('/user/:username', function (req, res) {

	db.User.findOne({
		where: {
			username: req.params.username
		}
	}).then((data) => {

		res.json(data);
	});

});

//Add new user to database
router.post('/user/:username', function (req, res) {

	Promise.all([
		db.User.create({
		username: req.params.username
    }),
  ]).then((data) => {

		res.json(data);
	});
});

router.get('/login', function (req,res) {
	
});

router.get('/', function (req,res) {
	res.sendFile(path.join(__dirname, '../samples/userform.html'));
});

router.get('/success', function (req,res) {
	res.send('Congratulations, you\'ve signed in');
});


router.post('/login',
  passport.authenticate('local', { successRedirect: '/success',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

module.exports = router;
