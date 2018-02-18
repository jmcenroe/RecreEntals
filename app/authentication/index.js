

module.exports = function (passport) {

 
  const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
  const db = require('../db');

  const googleClientID = '98587718280-77elp0092ar1gvcsvts7n4iafe934f0v.apps.googleusercontent.com';
  const googleClientSecret = 'stHc5mcV3xF5a9NrxPTotDC_';


  passport.middleware = function () {
    return function (req, res, next) {
      console.log('middleware');
      if (req.isAuthenticated()) {
        console.log('Authenticated');
        return next()
      }
      res.redirect('/')
    }
  }

  passport.serializeUser(function (user, cb) {
    console.log('new phrase');
    cb(null, user.displayName)
  });

  passport.deserializeUser(function (username, cb) {
    console.log(username);
    findUser(username, cb)
  });

  function findUser(user, callback) {

    db.User.findOne({
      where: {
        displayName: user
      }
    }).then((data) => {
      if (data) {

        if (data.password !== null) {

          data.password = bcrypt.hashSync(data.password, salt);
        }
        return callback(null, data)
      }

      return callback(null)
    });
  }

  passport.use(new GoogleStrategy({
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: 'http://localhost:3001/auth/google/callback'
    },
    function (accessToken, refreshToken, profile, done) {
      
      db.User.findOrCreate({
          where: {
            otherId: profile.id
          },
          defaults: {
            displayName: profile.displayName,
            usertype: 'Google'
          }
        })
        .spread((user, created) => {
          console.log(accessToken);
          return done(null, user);
        })
    }));

  const LocalStrategy = require('passport-local').Strategy;
  const bcrypt = require('bcrypt');

  passport.use(new LocalStrategy(
    (username, password, done) => {
      findUser(username, (err, user) => {
        if (err) {
          return done(err)
        }

        // User not found
        if (!user) {
          console.log('User not found')
          return done(null, false)
        }

        // Always use hashed passwords and fixed time comparison
        bcrypt.compare(password, user.password, (err, isValid) => {
          if (err) {
            console.log('error');
            return done(err)
          }
          if (!isValid) {
            console.log('password wrong');
            return done(null, false)
          }
          console.log('Getting here');
          return done(null, user)
        })
      })
    }
  ));
  //Facebook authentication credentials

  const FacebookStrategy = require('passport-facebook').Strategy;
  const facebookAppID = '222253655008837';
  const facebookAppSecret = 'f18a6c5e922cc2e7bd9295f720f9d4d8';

  passport.use(new FacebookStrategy({
      clientID: facebookAppID,
      clientSecret: facebookAppSecret,
      callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    function (accessToken, refreshToken, profile, done) {

      console.log(profile);
      db.User.findOrCreate({
          where: {
            otherId: profile.id
          },
          defaults: {
            displayName: profile.displayName,
            usertype: 'Facebook'
          }
        })
        .spread((user, created) => {
          console.log(user.get({
            plain: true
          }))
          console.log(created)
          return done(null, user);
        })
    }));

}