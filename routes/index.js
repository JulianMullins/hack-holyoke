var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'College Rides' });
});

router.get('/signupPass', function(req, res, next) {
	res.render('signupPass');
})

router.get('/signupDriver', function(req, res, next) {
	res.render('signupDriver');
})

router.get('/login', function(req, res, next) {
	res.render('login');
})

router.get('/postRide', function(req, res, next) {
	res.render('postRide');
})

module.exports = router;
