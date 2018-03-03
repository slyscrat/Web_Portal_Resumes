var authController = require('../controllers/authcontroller.js');
var dataAction = require('../data/data.js');
var Action = dataAction.all;

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
    app.get('/resumes', function(req,res,next){
            Action = dataAction.all;
            Nice(req, res, function(result){
                req.result = result;
                return next();
            })
        }, authController.resumes)
    
    app.post('/dashboard', isLoggedIn, dataAction.update, authController.dashboard);
    app.get('/user', function(req, res, next){
            Action = dataAction.select;
            if (req.query.id == "" || Number.isNaN(+req.query.id)) {
                req.session.message = "Пользователь с id = " + req.query.id +" не существует";
                req.session.messages = [];
                console.log("Пользователь не найден");
                res.redirect("./error");
                return;
            }
            Nice(req, res, function(result){
                req.result = result;
                return next();
            })
        }, authController.user);
    app.get('/logout', authController.logout);
    app.get('/dashboard', isLoggedIn, authController.dashboard);
    app.get('/error', authController.error);
    
    function Nice (req, res, callback) {
        Action(req, res, function(data){
            callback(data);
            req.result = data;
        });
    }

    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect('/signin');
    }
}