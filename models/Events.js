var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Events Schema has four attributes Id , Name, Type, Location, Date, Image
var EventSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Events', EventSchema);
