module.exports = function (sequelize, DataTypes) {


var Reservation = sequelize.define("Reservation", {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false
    }

}, {
    timestamps: true
});

Reservation.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Reservation.belongsTo(models.Item);
    Reservation.belongsTo(models.User);
  };


return Reservation;
};