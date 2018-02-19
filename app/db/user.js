module.exports = function (sequelize, DataTypes) {


var User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    //Id which comes from third party authentication (Google, Facebook)
    otherId: {
        type: DataTypes.STRING(50),
        unique: true
    },
    //User name
    username: {
        type: DataTypes.STRING(50),
        unique: true
    },
    password: {
        type: DataTypes.STRING(256)
    },
    displayName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    usertype: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50)
    },
    phone: {
        type: DataTypes.STRING(25)
    }

}, {
    timestamps: true
});


return User;
};