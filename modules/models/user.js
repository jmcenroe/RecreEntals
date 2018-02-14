module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(25),
            allowNull: false
        }

    }, {
        timestamps: false
    });

    return User;
};