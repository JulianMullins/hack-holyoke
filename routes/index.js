var express = require('express');
var router = express.Router();

var websiteTitle = 'College Rides';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: websiteTitle});
});

router.get('/signupPass', function(req, res, next) {
	res.render('signupPass', {title: websiteTitle});
})

router.get('/signupDriver', function(req, res, next) {
	res.render('signupDriver', {title: websiteTitle});
})

router.get('/login', function(req, res, next) {
	res.render('login', {title: websiteTitle});
})

router.get('/postRide', function(req, res, next) {
	res.render('postRide', {title: websiteTitle});
})

router.get('/pasOrDriver', function(req, res, next) {
	res.render('pasOrDriver');
})

module.exports = router;
