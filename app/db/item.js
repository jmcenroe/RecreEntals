module.exports = function (sequelize, DataTypes) {


var Item = sequelize.define("Item", {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    itemName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    itemDescription: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    hourly: {
        type: DataTypes.DECIMAL(10,2)
    },
    daily: {
        type: DataTypes.DECIMAL(10,2)
    },
    weekly: {
        type: DataTypes.DECIMAL(10,2)
    },
    monthly: {
        type: DataTypes.DECIMAL(10,2)
    },
    imageURL: {
        type: DataTypes.STRING(150)
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }

}, {
    timestamps: true
});

Item.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };


return Item;
};