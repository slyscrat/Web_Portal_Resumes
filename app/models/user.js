module.exports = function(sequelize, Sequelize){
    var User = sequelize.define('user', {
        firstname:{
            type: Sequelize.STRING,
            notEmpty: true
        },

        lastname:{
            type: Sequelize.STRING,
            notEmpty: true
        },

        email:{
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        
        patronymic:{
            type: Sequelize.STRING      //varchar(20-30)
        },

        site:{
            type: Sequelize.STRING      // varchar(50)
        },

        birth_date:{
            type: Sequelize.DATEONLY
        },

        gender:{
            type: Sequelize.CHAR        // M, F
        },

        business_trip:{
            type: Sequelize.CHAR        // A, S, N
        },

        citizenship:{
            type: Sequelize.STRING      // varchar(30)
        },

        phone_number:{
            type: Sequelize.STRING      // varchar(20)
        }
    });
    return User;
};
