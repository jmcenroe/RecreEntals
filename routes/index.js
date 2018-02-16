const express = require("express");
const router = express.Router();
const db = require('../app/db');
const path = require('path');

// Sets up initial splash page
router.route('/').get(function (req, res) {
	res.sendFile(path.join(__dirname, '../splash.html'));
});

// Show User Profile
router.route('/user').get(function (req, res) {
	res.sendFile(path.join(__dirname, '../profile.html'));
});

// Update user information
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

// Find existing user data
router.get('/user/:username', function (req, res) {

	db.User.findOne({
		where: {
			username: req.params.username
		}
	}).then((data) => {

		res.json(data);
	});
});

// Add new user to database
router.post('/user/:username', function (req, res) {

	Promise.all([
		db.User.create({
		username: req.params.username
    }),
  ]).then((data) => {

		res.json(data);
	});
});

// List of all products
router.route('/products').get(function (req, res) {
	res.sendFile(path.join(__dirname, '../product.html'));
});

// Single product detail
router.route('/product-detail').get(function (req, res) {
	res.sendFile(path.join(__dirname, '../product-detail.html'));
});

// Add new product to database
router.post('/user/:username/products/:product', function (req, res) {

	Promise.all([
		db.Product.create({
		productsname: req.params.productsname
    }),
  ]).then((data) => {

		res.json(data);
	});
});

// Sets up sign in page
router.route('/signin').get(function (req, res) {
	res.sendFile(path.join(__dirname, '../signin.html'));
});

module.exports = router;
