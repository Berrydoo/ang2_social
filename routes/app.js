var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/', function(req, res, next) {

    User.findOne({}, (err, doc) => {
        if (err) {
            return res.send('Error!');
        }

        res.render('node', {
            email: doc.email
        });
    });

});

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Jim',
        lastName: 'Dewberry',
        password: 'super-secret',
        email
    });

    user.save();
    res.redirect('/');
});

module.exports = router;
