const Koa = require('koa');
const app = new Koa();
const routes = require('./routes');

app.use(routes.routes(), routes.allowedMethods());

app.listen(9092);
