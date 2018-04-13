const koa = require('koa');

const setRouters = require('./routerLoader');//引入router中间件

const controllers = require('./loader').loadController();//引入router中间件

koa.prototype['controller'] = {};
controllers.forEach(ctrl => {
    koa.prototype.controller[ctrl.name] = ctrl.module;
})

const app = new koa();


app.use(setRouters(app));//引入router中间件

app.listen(3000, '127.0.0.1', () => {
    console.log('服务器启动');
})