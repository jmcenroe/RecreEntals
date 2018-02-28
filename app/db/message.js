module.exports = function (sequelize, DataTypes) {


var Message = sequelize.define("Message", {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    message: {
        type: DataTypes.STRING(250),
        allowNull: false
    }

}, {
    timestamps: true
});

Message.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Message.belongsTo(models.User, {as: 'author'});
  };


return Message;
};