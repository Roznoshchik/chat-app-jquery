
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    profilePic: {
      type: DataTypes.STRING, 
      allowNull: false
    }, 
    responseUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    lastSeen: {
      type: DataTypes.DATE, 
      allowNull: false
    }

  }, {timestamps:false});

  User.associate = (db) => {
    db.User.hasMany(db.Message, {as: 'messages', foreignKey:'senderId'});
    db.User.belongsToMany(db.Chat, {through: 'User_Chats', as:'chats'});
  };


  return User
}