var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    db = require('../models');

    passport.use(new LocalStrategy(
        function(username, password, done) {
          console.log('trying');
          db.User.findOne({ username: username }, function (err, user) {
            console.log('Getting here', user)
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            console.log('Getting all the way', user);
            return done(null, user);
          });
        }
      ));


module.exports = passport;

