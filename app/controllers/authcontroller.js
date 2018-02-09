var exports = module.exports = {}
exports.signup = function(req, res) {
    res.render('signup', {signup_error: req.session.message});
}
exports.signin = function(req, res) {
    res.render('signin', {signin_error: req.session.message});
}
exports.dashboard = function(req, res) {
    res.render('dashboard', {user: req.user});
}
exports.main = function(req, res) {
    res.render('main');
}
exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        if (err) res.status(500);
        res.redirect('/signin');
    })
}