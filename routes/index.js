var express = require('express');
var router = express.Router();
var models = require('../models/models');
var User = models.User;

var websiteTitle = 'College Rides';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: websiteTitle});
});

router.post('/', function(req, res, next) {
	res.redirect('/startJourney');
})

router.get('/signupPass', function(req, res, next) {
	res.render('signupPass');
})

router.post('/signupPass', function(req, res, next) {
	var user = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		college: req.body.college
	});
	console.log('user: ', user);
	user.save(function(error) {
		if(error) {
			res.render('signupPass', {
				error: error
			});
		} else {
			res.redirect('/profilePage/' + user._id);
		}
	})
})

router.get('/profilePage/:id', function(req, res, next) {
	console.log('req.params.id', req.params.id);
	User.findById(req.params.id).exec(function(err, user) {
		res.render('profilePage', {
			user: user
		});
	})
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

router.get('/searchResPass', function(req, res, next) {
	res.render('searchResPass');
})

module.exports = router;
