module.exports = function (sequelize, DataTypes) {


var Conversation = sequelize.define("Conversation", {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
    

}, {
    timestamps: true
});

Conversation.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Conversation.belongsTo(models.User, {as: 'user1'});
    Conversation.belongsTo(models.User, {as: 'user2'});
    Conversation.hasMany(models.Message, {as: 'Messages'}); 
  };


return Conversation;
};