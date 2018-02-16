var User = require('../models/index.js').user;

module.exports.update = function(req, user, next){

            User.findOne({
                where:{
                    email: req.user.email
                }
            }).then(function(user){
                if (!user){
                    req.session.message = "User doesn't exist";
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
                    phone_number: req.body.phone_number
                }).then(function(){
                    req.session.message = 'Updated succesfully';
                    req.session.messages = [];
                    req.user = user;
                    return next();
                }).catch(function(err){
                    console.log("Error", err);
                    req.session.message = 'Error occurred while updating. Please, try again';
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
            req.session.message = "User with id = " + req.query.id +" doesn't exist";
            req.session.messages = [];
            console.log("User not found");
            res.redirect("./error");
            return;
        }
        var data = user.get();
        callback(data);
});
};