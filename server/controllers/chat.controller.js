const db = require('../models/index.model');

const getChat = async (ctx) => {
  const offset = ctx.request.query.offset;
  const chatId = ctx.params.chatId;
  const chat = await db.Chat.findOne({
    where: {
      id: chatId
    },
    include: [
      {
        model: db.Message,
        as: 'messages',
        order:[["sentAt", "DESC"]],
        limit: 25,
        offset: offset ? offset : 0
      }, 
      {
        model: db.User,
        as: "participants",
        through:{attributes: [] }
      }
    ]
  });
  ctx.status = 200;
  ctx.body = chat;
}

const addMessage = async (ctx) => {
  console.log('storing message in chat.');
  
  const msg = await db.Message.create({
    sentAt: ctx.request.body.sentAt,
    body: ctx.request.body.body,
    chatId: ctx.params.chatId,
    senderId: ctx.request.body.sender

    }, {
      include: {
        association: 'chat',
        association: 'sender'
      }
    });

    ctx.status = 201;
    ctx.body = msg;
}

const getChats = async (ctx) => {
  console.log('getting all chats for user');

  const user = await db.User.findOne({
    include: [{
      model: db.Chat, 
      through: { attributes: [] },
      as: "chats",
      include: [
          {
            model: db.Message,
            as: "messages",
            order:[["sentAt", "DESC"]],
            limit:1,
          },
          {
            model: db.User,
            through: {attributes: [] },
            as: "participants"
          }
       ]
      }
    ],
    where: {
      id: 1
    }

  });
  
  ctx.body = user.chats.sort((a,b)=> b.messages[0].sentAt - a.messages[0].sentAt);
}


module.exports = {
  getChat, getChats, addMessage
}