
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {},{timestamps:false})
  
  Chat.associate = (db) => {
    db.Chat.hasMany(db.Message, {as: 'messages', foreignKey: 'chatId'});
    db.Chat.belongsToMany(db.User, {through: 'User_Chats', as:'participants'});
  }

  return Chat
}


