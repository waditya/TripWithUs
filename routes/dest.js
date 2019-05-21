
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var DestS = require('../models/destination.js');

/* GET ALL Destination */
router.get('/', function(req, res, next) {
  Dests.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Destination BY ID */
router.get('/:id', function(req, res, next) {
  Dests.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Destination */
router.post('/', function(req, res, next) {
  Dests.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Destination */
router.put('/:id', function(req, res, next) {
  Dest.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Destination */
router.delete('/:id', function(req, res, next) {
  Dest.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
