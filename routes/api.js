const router = require("express").Router();
const db = require('../app/db');



router.get('/success', function (req,res) {
	res.send('Congratulations, you\'ve signed in');
});