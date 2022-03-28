const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-bodyparser');
const router = require('./router');


const app = new Koa()
app.use(koaBody());
app.use(serve(__dirname+'/../client'));
app.use(router.routes());


module.exports = app;