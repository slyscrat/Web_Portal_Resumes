var authController = require('../controllers/authcontroller.js');
var dataAction = require('../data/data.js');
module.exports = function(app, passport){
    app.get('/', authController.main);
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));
    
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/',
        failureRedirect: '/signin'
    }))
    
    app.post('/dashboard', isLoggedIn, dataAction.update, authController.dashboard);
    
    app.get('/logout', authController.logout);
    app.get('/dashboard', isLoggedIn, authController.dashboard);
    
    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect('/signin');
    }
}
