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
        isAlphanumeric: true,
        len: [5,50]
      },
    },
    password: {
      type: DataTypes.STRING(10),
      allowNull: false,
      notEmpty: true,
      validation: {
        len: [5,10]
      },
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      notEmpty: true,
      validation: {
        isAlpha: true
        len: [5,50],
      },
    }
    email: {
      type: DataTypes.STRING(10),
      allowNull: false,
      notEmpty: true,
      validation: {
        isEmail: true,
        len: [5,100]
      },
    },
    creditcard: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      validation: {
        isCreditCard: true,
        len: [16,17],
      },
    },
    phone: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      validation: {
        isNumeric: true,
        len: [10],

      },
    },
    qtyrented: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    qtyforrent: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    rating: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    acctage: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    }
  });

  return User;
};
