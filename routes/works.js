var express = require('express');
var router = express.Router();
var workService = require('../services/work-service');

// GET work listings

router.get('/', function(req,res,next){
  res.send('respond with a resource');
});

router.get('/create', function(req,res,next){
  var vm={
    title: "Add a project"
  };
  res.render('works/create', vm);
});

router.post('/create', function(req, res, next){
  workService.addWork(req.body, function(err){
    if(err){
      var vm={
        title: "Add a project",
        input: req.body,
        error: "Something went wrong"
      }
      res.redirect('/works');
    }
  });
});

module.exports = router;