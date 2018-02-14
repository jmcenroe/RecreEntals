var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

<<<<<<< HEAD
//Passport authentication stuff
const passport = require('passport');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);


=======


console.log('got here');
>>>>>>> 22ec338d33a18047d0107f60d4b24e373e5428f7
var index = require('./routes/index');

var users = require('./routes/users');


var db = require('./app/db');
var seed = require('./seeders/seeds');

var app = express();

//Passport app setup stuff
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  store: new RedisStore({
    url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}));


var db = require('./modules/models');
var seed = require('./seeders/seeds');

var PORT = process.env.PORT || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD

app.use('/', index);
app.use('/users', users);
=======
// app.use('/', index);
// app.use('/users', users);
>>>>>>> 22ec338d33a18047d0107f60d4b24e373e5428f7

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

<<<<<<< HEAD
=======
var PORT = process.env.PORT || 3001;

>>>>>>> 22ec338d33a18047d0107f60d4b24e373e5428f7
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
