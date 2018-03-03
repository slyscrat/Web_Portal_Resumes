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
            type: Sequelize.DATEONLY,
            allowNull: true
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
        },
        ////////////////////////////
        posit:{
            type: Sequelize.STRING      // varchar(20)
        },

        sphere:{
            type: Sequelize.STRING      // varchar(20)
        },

        skills:{
            type: Sequelize.STRING      // varchar(20)
        },

        specialist_year:{
            type: Sequelize.FLOAT
        },

        foreign_languages:{
            type: Sequelize.STRING      // varchar(60)
        },

        payment:{
            type: Sequelize.INTEGER      // varchar(20)
        },

        employment:{
            type: Sequelize.CHAR         // f(full), p(particularly)
        },

        graphic:{
            type: Sequelize.CHAR        // f, g, u
        },

        organization:{
            type: Sequelize.STRING      // varchar(50)
        },

        posit_was:{
            type: Sequelize.STRING      // varchar(30)
        },

        duty_achieves:{
            type: Sequelize.STRING      // varchar(100)
        }
    });
    return User;
};
