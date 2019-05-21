var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Destination Schema has four attributes City , Activity, Budget, Image
var DestSchema = new Schema({
  city: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('destination', DestSchema);
