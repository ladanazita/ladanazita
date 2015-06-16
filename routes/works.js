var express = require('express');
var router = express.Router();
var work = require('../models/work');
var workService = require('../services/work-service');

// GET work listings



// router.get('/create', function(req,res,next){
//   var vm={
//     title: "Add a project"
//   };
//   res.render('works/index', vm);
// });

// router.post('/create', function(req, res, next){
//   workService.addWork(req.body, function(err){
//     if(err){
//       console.log(err);
//       var vm={
//         title: "Add a project",
//         input: req.body,
//         error: err
//       }
//       res.redirect('/works');
//     }
//   });
// });

router.get('/featured', function(req, res, next) {
  workService.findWork(function(err, works) {
    if (err) {
      return res.status(500).json({error: 'Failed to retrieve works'});
    }
    res.json(works);
  });
});


module.exports = router;