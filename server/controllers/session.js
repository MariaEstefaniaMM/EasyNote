const express = require('express');
const passport = require('passport');
const auth = require('./../middlewares/isAuth');
const jwt  = require('jsonwebtoken');
let config = require('../helpers/config');
let router = express.Router();
let user = require('../helpers/user');

router.post('/login', auth.isLogged, function (req, res, next) {
    passport.authenticate('local',{session: false}, function (err, user, info) {
        console.log(user);
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send({
                err: info
            });
        }
        req.logIn(user,{session: false}, function (err) {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    err: 'Could not log in user'
                });
            }       
            
            let jsonWebToken = jwt.sign(user,config.secret);
            console.log(jsonWebToken);
            res.status(200).send({
                status: 200,
                message:'Login Successful',
                token:jsonWebToken
            });
        });
    })(req, res, next);
});

router.post('/signup',auth.isLogged,function(req, res, next) {
    console.log('postSignUp'+req.body.name+req.body.lastName+ req.body.username+ req.body.email+ req.body.password)
    user.checkUser(req.body.username, req.body.email).then((data) => {
        console.log(data)
        if(data.length==0){
            user.signup(req.body.name, req.body.lastName, req.body.username, req.body.email, req.body.password).then((data) => {
                console.log('SignUp Successful')
                res.status(200).send({
                    status: 200,
                    message:'SignUp Successful'
                });
                console.log(res)
            }).catch((err) => {
                console.log(error)
            switch (err.constraint) {
                case 'email':
                res.send({status:401});
                break;
                default:
                res.send({status:404});
                break;
            }
            });
        }else{
            res.status(403).send({
                status: 403,
                message:'email or password already used'
            });
          }
        }).catch((err) => {
            res.send({status:403});
          })
});

router.get('/logout', auth.isAuth, function (req, res) {
    req.logout();
    res.status(200).send({
        status: 'Bye!'
    });
});

module.exports = router;