var Work = require('../models/work').Work;

exports.addWork = function(work, next){
  var newWork= new Work({
    id: work.id,
    image: work.image,
    featured: work.featured,
    completion: work.completion,
    type: work.type,
    participation: work.participation,
    title: work.title,
    category: work.category,
    date: work.date,
    description: work.description,
    link: work.link
  });

  newWork.save(function(err){
    if(err){
     return next(err);
    }
    next(null);
  });
};