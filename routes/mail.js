var nodemailer = require('nodemailer');
const config = require('../config/config');
var transporter = nodemailer.createTransport(config.email);



console.log(config.email);

var mailOptions = {
  from: 'recre.entals@gmail.com',
  to: 'cclarkrun@gmail.com',
  subject: 'I\'m sending you this email from Node',
  text: 'Do you think you can fix up the images and the signature real nice?'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});