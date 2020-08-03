const express = require('express');
const passport = require('passport');
const router = express.Router();

// gets and displays a login page
router.get('/', (req, res) => {
    res.render('admins/login')
})
//process the username and password
router.post('/', passport.authenticate('local'), (req, res) => {
    req.session.user = req.user;
    res.redirect('dash');
});
module.exports = router;