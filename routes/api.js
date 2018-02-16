const router = require("express").Router();
const db = require('../app/db');



router.get('/success', function (req,res) {
	console.log('getting here');
	res.send('Congratulations, you\'ve signed in');
});

module.exports = router;