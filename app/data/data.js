var User = require('../models/index.js').user;

module.exports.update = function(req, user, next){

            User.findOne({
                where:{
                    email: req.user.email
                }
            }).then(function(user){
                if (!user){
                    req.session.message = "Пользователь не существует";
                    req.session.messages = [];
                    return next();
                }

                user.updateAttributes({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    patronymic: req.body.patronymic,
                    site: req.body.site,
                    birth_date: req.body.birth_date,
                    gender: req.body.gender,
                    business_trip: req.body.business_trip,
                    citizenship: req.body.citizenship,
                    phone_number: req.body.phone_number,
                    posit: req.body.posit,
                    sphere: req.body.sphere,
                    skills: req.body.skills,
                    specialist_year: req.body.specialist_year,
                    foreign_languages: req.body.foreign_languages,
                    payment: req.body.payment,
                    employment: req.body.employment,
                    graphic: req.body.graphic,
                    organization: req.body.organization,
                    posit_was: req.body.posit_was,
                    duty_achieves: req.body.duty_achieves
                }).then(function(){
                    req.session.message = 'Успешно обновлено';
                    req.session.messages = [];
                    req.user = user;
                    return next();
                }).catch(function(err){
                    console.log("Error", err);
                    req.session.message = 'Во время обновления возникли ошибки. Пожалуйста, повторите попытку позже';
                    req.session.messages = [];
                    return next();
            })
    });
};

module.exports.select = function(req, res, callback){

    User.findOne({
        where:{
            id: req.query.id
        }
    }).then(function(user){
        if (!user){
            req.session.message = "Пользователь с id = " + req.query.id +" не существует";
            req.session.messages = [];
            console.log("Пользователь не найден");
            res.redirect("./error");
            return;
        }
        var data = user.get();
        callback(data);
});
};

module.exports.all = function(req, res, callback){
    User.findAll({
        attributes: ['id', 'firstname', 'lastname', 'sphere', 'payment', 'citizenship', 'graphic', 'posit', 'gender']
    }).then(function(resumes){
        if (!resumes){
            req.session.message = "Нет пользователей";
            req.session.messages = [];
            console.log("Нет пользователей");
            res.redirect("./");
            return;    
        }
        console.log(resumes[0]);
        callback(resumes);
    });
}