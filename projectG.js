

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gomathi');

var daSchema = mongoose.Schema({
  Name: {type:String},
  email: {type:String},
  Date: {type:String},
  Comments: {type:String} 
});


var ani = mongoose.model('ani',daSchema,'govin');
module.exports = ani;
