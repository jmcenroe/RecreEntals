// import { hashSync } from '../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bcrypt';

const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy;
const db = require('../db');

const authenticationMiddleware = require('./middleware')

// Generate Password
const saltRounds = 10
const myPlaintextPassword = 'password'
const salt = bcrypt.genSaltSync(saltRounds)


function initPassportLocal() {
    console.log('Getting to authentication');
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
    ))

    passport.authenticationMiddleware = authenticationMiddleware
}

module.exports = initPassportLocal;
