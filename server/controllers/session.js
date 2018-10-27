const express = require('express');
const passport = require('passport');
const auth = require('./../middlewares/isAuth')
let router = express.Router();

router.get('/value', auth.isAuth, (req, res) => {
    res.send(req.session.passport);
});
router.post('/login', auth.isLogged, function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send({
                err: info
            });
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.status(500).send({
                    err: 'Could not log in user'
                });
            }
            res.status(200).send({
                status: 'Login successful!'
            });
        });
    })(req, res, next);
});

router.post('/signup',auth.isLogged,function(req, res, next) {
    console.log('postSignUp'+req.body.name+req.body.lastName+ req.body.username+ req.body.email+ req.body.password)
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
});

router.get('/logout', auth.isAuth, function (req, res) {
    req.logout();
    res.status(200).send({
        status: 'Bye!'
    });
});

module.exports = router;