module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("Goods", {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
      },
      goodsname: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        validation: {
            isNumber: true,
            len: [5,10]
        } ,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });

  return Goods;
};