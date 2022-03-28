const db = require('../models/index.model');

const updateUser = async (ctx) => {
  const user = await db.User.findOne({
    where: {
      id: ctx.params.id
    }
  });

  user.lastSeen = ctx.request.body.lastSeen
  user.save()
  ctx.status = 204;
  ctx.body = user;
}
module.exports = {
  updateUser
}