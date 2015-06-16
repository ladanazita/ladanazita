var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Welcome' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me' });
});

router.get('/featured', function(req, res, next) {
  res.render('featured', { title: 'Featured Works' });
});

module.exports = router;
