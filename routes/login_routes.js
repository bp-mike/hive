const express = require('express');
const passport = require('passport');
const router = express.Router();

// gets and displays a login page
router.get('/', (req, res) => {
    res.render('admins/login')
})
// router.post('/', (req, res) => {
//     res.render('admins/login')
// })
router.get('/sales_agent', (req, res) => {
    res.render('admins/login_agent')
})
//process the username and password
router.post('/', passport.authenticate('local'), (req, res) => {
    req.session.user = req.user;
    res.redirect('/dash');
});

// router.post('/sales_agent', passport.authenticate('local'), (req, res) => {
//     req.session.user = req.user;
//     res.redirect('/dash');
// });

// -----------
// (post) the admin signup url processing
// router.post('/login', function(req, res, next){
// passport.authenticate('local', {
//     successRedirect: '/dash',
//     failureRedirect: '/admins/login',
//     failureFlash: true
// })(req, res, next)
// })

module.exports = router;