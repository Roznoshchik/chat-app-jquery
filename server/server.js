const app = require('./index');
const port = 3000;
const db = require('./models/index.model')
  
db.sequelize.sync({alter:true}).then(() => {
  console.log('db up and running. ')
  app.listen(port, () => {
    console.log('chat app up and running with koa')
  });
});
