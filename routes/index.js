var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/about', function(req, res) {
  res.render('about');
});
router.get('/contact', function(req, res) {
  res.render('contact');
});
router.get('/featured', function(req, res) {
  res.render('featured');
});
router.get('/links', function(req, res) {
  res.render('links');
});

module.exports = router;
