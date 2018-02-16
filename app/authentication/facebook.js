// import { hashSync } from '../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bcrypt';

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const db = require('../db');

const authenticationMiddleware = require('./middleware')

//Facebook authentication credentials
const facebookAppID = '222253655008837';
const facebookAppSecret = 'f18a6c5e922cc2e7bd9295f720f9d4d8';


function initPassportFacebook() {
    passport.use(new FacebookStrategy({
            clientID: facebookAppID,
            clientSecret: facebookAppSecret,
            callbackURL: 'http://localhost:3000/auth/facebook/callback'
        },
        function (accessToken, refreshToken, profile, done) {

            console.log(profile);
            db.User.findOrCreate({
                    where: {
                        facebookId: profile.id
                    },
                    defaults: {
                        username: profile.displayName,
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

    passport.authenticationMiddleware = authenticationMiddleware
}

module.exports = initPassportFacebook;