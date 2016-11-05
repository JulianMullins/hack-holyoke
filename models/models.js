"use strict";

var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
  email: String,
  username: { type: String, index: { unique: true } },
  password: String,
  college: String,
  driver: false,
  reviews: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Review'
  }
});

var reviewsSchema = mongoose.Schema({
	rating: Number,
	title: String,
	desc: String,
	date: String
})


module.exports = {
  User: mongoose.model('User', userSchema),
  Review: mongoose.model('Review', reviewsSchema)
};