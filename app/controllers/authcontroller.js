var exports = module.exports = {}
exports.signup = function(req, res) {
    res.render('signup', {signup_error: req.session.message});
    clean_log(req)
}
exports.signin = function(req, res) {
    res.render('signin', {signin_error: req.session.message});
    clean_log(req)
}
exports.dashboard = function(req, res) {
    res.render('dashboard', {user: req.user, dashboard_message: req.session.message});
    clean_log(req)
}
exports.main = function(req, res) {
    res.render('main', {user: req.user});
    clean_log(req)
}
exports.resumes = function(req, res) {
    res.render('resumes', {user: req.user, result:req.result});
    clean_log(req)
}
exports.user = function(req, res){
    res.render('user', {user: req.user, result: req.result});
    clean_log(req)
}
exports.error = function(req, res){
    res.render('error', {error: req.session.message});
}
exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            res.status(500);
        }
        res.redirect('/signin');
    })
}

function clean_log(req){
    req.session.message = '';
}