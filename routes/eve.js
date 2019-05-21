
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Events = require('../models/Events.js');

/* GET ALL EVENTS */
router.get('/', function(req, res, next) {
  Events.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE EVENT BY ID */
router.get('/:id', function(req, res, next) {
  Events.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE EVENTS */
router.post('/', function(req, res, next) {
  Events.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE EVENTS */
router.put('/:id', function(req, res, next) {
  Events.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE EVENTS */
router.delete('/:id', function(req, res, next) {
  Events.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
