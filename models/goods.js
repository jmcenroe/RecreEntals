var Sequelize = require('sequelize');
var sequelize = require('../models/goods.js'); 

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
    'created_at': {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    'updated_at': {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
    },
  }, {
    timestamps: true,
    tableName: 'rentStuff',
    paranoid: true,
    underscored: true
  });
    
  return Goods;
};