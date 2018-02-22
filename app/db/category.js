module.exports = function (sequelize, DataTypes) {


var Category = sequelize.define("Category", {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    imageURL: {
        type: DataTypes.STRING(250),
        allowNull: false
    }
    

}, {
    timestamps: true
});


return Category;
};