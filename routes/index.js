var express = require('express');
var router = express.Router();

var websiteTitle = 'College Rides';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: websiteTitle});
});

router.post('/', function(req, res, next) {
	console.log("posting");
	res.redirect('/startJourney');
})

router.get('/signupPass', function(req, res, next) {
	res.render('signupPass');
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
	res.render('startJourney', {
		title: websiteTitle,
		from: req.body.from,
		to: req.body.to
	});
})

router.get('/profilePage', function(req, res, next) {
	res.render('profilePage');
})

router.get('/detailTrip', function(req, res, next) {
	res.render('detailTrip');
})

router.get('/searchResDriver', function(req, res, next) {
	res.render('searchResDriver');
})
module.exports = router;
