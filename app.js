var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var db = require('./app/db');
var seed = require('./seeders/seeds');

var app = express();

//Passport app setup stuff
//Passport authentication stuff
var passport = require('passport');
const session = require('express-session');

app.use(session({
  secret: 'secret'
}));

app.use(passport.initialize());
app.use(passport.session());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static("client/build"));


// app.use('/', index);
// app.use('/users', users);


// Define apiRoutes

// const newpassport = require('./app/authentication/index.js');
// console.log(newpassport);
require('./app/authentication')(passport);
require('./routes/authentication')(app, passport);

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

//Temporary placeholder for authentication requests

// _______________________________________


  // _______________________________


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  console.log(req.originalUrl);
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
console.log('server loaded');

var PORT = process.env.PORT || 3001;

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

db.sequelize.sync({
    force: true
  })
  //Run seed functions to populate database
  .then(function () {
    var promise = seed(db);
    console.log('This is our promise:', promise);
    promise.then(function () {

      app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
      });
    });
  });

module.exports = app;