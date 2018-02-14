module.exports = function (sequelize, DataTypes) {


var Item = sequelize.define("Item", {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    //Id which comes from third party authentication (Google, Facebook)
    itemName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    //User name
    itemDescription: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    price: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

}, {
    timestamps: true
});


return Item;
};