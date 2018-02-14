module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }, googleId: {
            type: DataTypes.STRING(50)
        }, facebookId: {
            type: DataTypes.STRING(50)
        },
        username: {
            type: DataTypes.STRING(50)
        },
        password: {
            type: DataTypes.STRING(25)
        },
        usertype: {
            type: DataTypes.STRING(25),
            allowNull: false
        }

    }, {
        timestamps: false
    });

    return User;
};