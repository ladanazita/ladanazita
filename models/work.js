var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workSchema = new Schema({
  id: String,
  image: String,
  featured: Boolean,
  completion: String,
  type: String,
  participation: String,
  title: String,
  category: String,
  date: Number,
  description: String,
  link: {href: String, value: String}
});

var Work = mongoose.model('Work', workSchema);

module.exports = {
  Work : Work
};