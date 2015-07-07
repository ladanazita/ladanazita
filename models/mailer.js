// nodemailer
'user strict';

var nodemailer = require('nodemailer');
var directTransport= require('nodemailer-direct-transport');


exports.sendMail = function(req,res) {
  app.post('/contact', function(req,res){

  // Setup Nodemailer transport
  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth:{
      user: "ladanazita@gmail.com",
      pass: "application-specific-password"
    }
  });

  // mail options
  var mailOpts = {
    from: req.body.name + '&lt;' + req.body.email + '&gt;', //sender adress
    //grab form data from the request body object
    to:  'ladanazita@gmail',
    subject: "Contacted by" + req.body.name,
    text: req.body.comment
  };

  smtpTransport.sendMail(mailOpts, function(err, res){
    // email not sent
    if(err){
      res.render('contact', {title: 'Talk to me', msg: "Error occured, message not sent."+ error.status, err: true, page: 'contact'})
    }
    // email sent
    else{
      res.render('contact', {title: 'Talk to me', msg: 'Message sent! Thank you', err: false, page:'contact'})
    }
  });
});
}