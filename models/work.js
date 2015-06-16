var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var workService = require('../services/work-service');

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

workSchema.path('id').validate(function(value, next){
  workService.findWork(value, function(err, work){
  if(err){
    console.log(err);
    return next(false);
  }
  // return opposite of truthiness value of work
  // to see if the work exists
  next(!work);
  });
}, "That project already exists");

var Work = mongoose.model('Work', workSchema);

module.exports = {
  Work : Work
};