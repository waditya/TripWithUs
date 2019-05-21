var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express'); // ok
var jwt = require('jsonwebtoken');

var router = express.Router();

var User = require("../models/User");

var flag=false;

// HTTP POST METHOD FOR signing up user
router.post('/signup', function(req, res) {
  User.findOne({
    email: (req.body.email).toLowerCase()
  }, function(err, user) {

    if (err) throw err;

    if (!user) {

     // Creating a variable to store user

     var newUser = new User({
       username: req.body.username,
       email: (req.body.email).toLowerCase(),
       password: req.body.password
  });

      newUser.save(function(err) {
        if (err) {
          console.log('Error while saving');
          res.json({success: false, msg: 'Email already exists.'});
        }
        console.log('*** I think the user is created ***');
        res.json({success: true, msg: 'Successful created new user.'});
      });
  }
});
});

// HTTP POST Method for Logging in to the website
router.post('/signin', function(req, res) {
  User.findOne({
    email: (req.body.email).toLowerCase()
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

// Token validation for user authorizations
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
