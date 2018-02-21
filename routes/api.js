const express = require("express");
const router = express.Router();
const db = require('../app/db');
const path = require('path');
const sequelize = require('sequelize');

router.get('/categoriescount', (req, res) => {
	console.log('Route hit');
	db.Item.findAndCountAll({
		attributes: ['category'],
		group: ['category']
	}).then((data) => {
		res.json(data);
	});
});

router.get('/categories', (req, res) => {
	db.Category.findAll().then((data) => {
		res.json(data);
	})
});

router.get('/items/:category', (req, res) => {
	db.Item.findAll({
		where: {
			category: req.params.category
		}
	}).then((data) => {
		res.json(data);
	})
});

router.get('/items', (req, res) => {
	console.log('Hitting general items')
	db.Item.findAll({}).then((data) => {
		res.json(data);
	})
});

router.post('/additem', (req, res) => {
	console.log('Hitting api');
	db.Item.create(req.body, (err, response) => {
		if (!error) {
			res.send('Success');
		} else {
			res.send(error);
		}

	});


});

router.get('/item/:search', (req, res) => {
	console.log('hitting search');
	db.Item.findAll({
		where: {
			itemName: {
				$like: '%' + req.params.search + '%'
			}
		}
	}).then((data) => {
		res.json(data);
	});
});

module.exports = router;