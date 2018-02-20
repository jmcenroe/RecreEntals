module.exports = function (sequelize, DataTypes) {


var Category = sequelize.define("Category", {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
    

}, {
    timestamps: true
});


return Category;
};