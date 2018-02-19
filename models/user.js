var Sequelize = require('sequelize');
var sequelize = require('../models/user.js'); //sequelize instance

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true 
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      notEmpty: true,
      validation: {
        len: [5,50]
      },
    },
    password: {
      type: DataTypes.STRING(256)
      
    },
    displayName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      notEmpty: true,
      validation: {
        isAlpha: true,
        len: [5,50]
      },
    },
    email: {
      type: DataTypes.STRING(10),
      allowNull: false,
      notEmpty: true,
      validation: {
        isEmail: true,
        len: [5,100]
      },
    },
    phone: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      validation: {
        isNumeric: true,
        len: [10]
      },
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
    underscored: true,
  });

  return User;
};