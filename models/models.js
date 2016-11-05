"use strict";

var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
  email: String,
  username: { type: String, index: { unique: true } },
  password: String
});


module.exports = {
  User: mongoose.model('User', userSchema)
};