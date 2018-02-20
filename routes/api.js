const express = require("express");
const router = express.Router();
const db = require('../app/db');
const path = require('path');
const sequelize = require('sequelize');

router.get('/categoriescount', (req,res) => {
	console.log('Route hit');
	db.Item.findAndCountAll({
		attributes: ['category'],
		group: ['category']
	  }).then((data) => {
		  res.json(data);
	  });
});

router.get('/categories', (req,res) =>{
	db.Category.findAll().then((data) => {
		res.json(data);
	})
});

router.get('/items/:category', (req,res) => {
	db.Item.findAll({
		where: {
			category: req.params.category
		}
	}).then((data)=> {
		res.json(data);
	})
});

router.get('/items', (req,res) => {
	db.Item.findAll({
	}).then((data)=> {
		res.json(data);
	})
});

module.exports = router;
