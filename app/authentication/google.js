// import { hashSync } from '../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bcrypt';

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../db');

const authenticationMiddleware = require('./middleware');

//Google authentication credentials
const googleClientID = '98587718280-77elp0092ar1gvcsvts7n4iafe934f0v.apps.googleusercontent.com';
const googleClientSecret = 'stHc5mcV3xF5a9NrxPTotDC_';


function initPassportGoogle() {
    passport.use(new GoogleStrategy({
            clientID: googleClientID,
            clientSecret: googleClientSecret,
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        function (accessToken, refreshToken, profile, done) {
            
            console.log(profile);
            db.User.findOrCreate({
                where: {googleId: profile.id}, 
                defaults: {
                    username: profile.displayName,
                    usertype: 'Google'
            }})
            .spread((user, created) => {
            console.log(user.get({
            plain: true
            }))
            console.log(created)
            return done(null, user);
            })
        }));

    passport.authenticationMiddleware = authenticationMiddleware
}

module.exports = initPassportGoogle;
