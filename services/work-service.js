var Work = require('../models/work').Work;

exports.addWork = function(work, next){
  var newWork= new Work({
    id: work.id.toLowerCase(),
    image: work.image,
    featured: work.featured,
    completion: work.completion.toLowerCase(),
    type: work.type.toLowerCase(),
    participation: work.participation.toLowerCase(),
    title: work.title.toLowerCase(),
    category: work.category.toLowerCase(),
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

exports.findWork = function(featured, next){
  Work.findOne({id:id.toLowerCase()}, function(err, work){
    next(err, work);
  })
};