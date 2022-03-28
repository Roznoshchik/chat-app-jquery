module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    body: {
      type: DataTypes.STRING, 
      allowNull: false
    }, 
    sentAt: {
      type: DataTypes.DATE, 
      allowNull: false
    }
  }, {
    timestamps: false
  });

  Message.associate = (db) => {
    db.Message.belongsTo(db.User, {as: 'sender', foreignKey: 'senderId'});
    db.Message.belongsTo(db.Chat, {as: 'chat', foreignKey:'chatId'});

  }

  return Message
}