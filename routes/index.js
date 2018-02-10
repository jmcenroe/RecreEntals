var express = require("express");
var router = express.Router();
var db = require('../models');
var path = require('path');

// Sets up home page
router.route('/').get(function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//Launches shop
router.route('/:username').get(function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//Update user information
router.put('/user/update', function (req, res) {

	db.User.update(
		req.body, {
			where: {
				username: req.body.username,
				password: req.body.username
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

		//Creates a new list of goods for each individual user in the database
		goodscreate(req.params.username)
	]).then((data) => {

		res.json(data);
	});
});

module.exports = router;

