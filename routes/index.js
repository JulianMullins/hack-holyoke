var express = require('express');
var router = express.Router();

var websiteTitle = 'College Rides';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: websiteTitle});
});

router.post('/', function(req, res, next) {
	console.log("posting");
	res.render('signupPass', {
		from: req.body.location,
		to: req.body.destination
	});
})

router.get('/signupPass', function(req, res, next) {
	res.render('signupPass', {
		title: websiteTitle,
		from: res.body.from,
		to: res.body.to
	});
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

router.get('/startJourney', function(req, res, next) {
	res.render('startJourney');
})

router.get('/profilePage', function(req, res, next) {
	res.render('profilePage');
})

module.exports = router;
