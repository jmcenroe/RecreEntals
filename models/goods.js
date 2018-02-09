var Sequelize = require('sequelize');
var sequelize = require('../models/goods.js'); //sequelize instance

module.exports = function(sequelize, DataTypes) {
  var Goods = sequelize.define("Goods", {
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
			},
    },
    available: {
			type: DataTypes.BOOLEAN,
			allowNull: false
    },
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
	});
  
  Goods.associate = function(models) {
    // Goods should belong to a user
    // Goods can't be created without a User 
    Goods.belongsTo(models.User, {
        foreignKey: {
        allowNull: false
        }
    });
  };
    
  return Goods;
};