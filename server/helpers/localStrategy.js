let User = require('./users');
let passport = require('passport');
let localStrategy = require('passport-local').Strategy;

module.exports = new localStrategy({
    usernameField: 'ced',
    passwordField: 'password'
},function(ced, password, done) {
    User.getUserByUsername(ced).then((user)=>{
        if (user.error) {
            return done(null, false);
        }
        User.comparePassword(password, user.password).then((isMatch)=>{
            if (isMatch)
                return done(null, user);
            else
                return done(null, false);
        }).catch((err)=>{
            return done(null, false);
        });
    }).catch((err)=>{
        return done(null, false);
    });
});