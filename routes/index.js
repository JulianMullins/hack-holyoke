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



router.post('/singleTournament/:id/newGame', function(req, res, next) {
  console.log("Posting");
  res.render('index', {
    loggedIn: true,
    op1: req.body.op1,
    op2: req.body.op2,
    teamid1: req.body.teamid1,
    teamid2: req.body.teamid2,
    tourId: req.params.id

  });
})

module.exports = router;
