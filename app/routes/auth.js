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
    app.get('/resumes', authController.resumes);
    app.get('/user', function(req, res, next){
            Nice(req, res, function(result){
                req.result = result;
                return next();
            })
        }, authController.user);
    
    app.post('/dashboard', isLoggedIn, dataAction.update, authController.dashboard);
    app.get('/error', authController.error);
    
    app.get('/logout', authController.logout);
    app.get('/dashboard', isLoggedIn, authController.dashboard);
    
    function Nice (req, res, callback) {
        dataAction.select(req, res, function(data){
            callback(data);
            req.result = data;
        });
    }
    
    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect('/signin');
    }
}
