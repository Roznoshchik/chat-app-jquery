const Router = require('@koa/router');
const chatController = require('./controllers/chat.controller');
const userController = require('./controllers/user.controller');

router = new Router();

router.put('/users/:id/update', userController.updateUser)
router.get('/chats', chatController.getChats);
router.get('/chats/:chatId', chatController.getChat);
router.post('/chats/:chatId', chatController.addMessage);

module.exports = router;