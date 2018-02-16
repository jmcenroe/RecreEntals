// import { hashSync } from '../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bcrypt';
module.exports = function(app) {
const passport = require('passport')
const bcrypt = require('bcrypt')
const db = require('../db');

const authenticationMiddleware = require('./middleware')

// Generate Password
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

function findUser(user, callback) {
    
    db.User.findOne({
        where: {
            username: user
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

passport.serializeUser(function (user, cb) {
    console.log('getting any of this');
    cb(null, user.username)
})

passport.deserializeUser(function (username, cb) {
    console.log('problem');
    findUser(username, cb)
})

}
