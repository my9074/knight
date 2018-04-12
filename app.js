const koa = require('koa');

const setRouters = require('./routerLoader');//引入router中间件

const controllerLoader = require('./controllerLoader');//引入router中间件
const controllers = controllerLoader();
koa.prototype['controller'] = {};
controllers.forEach(ctrl => {
    koa.prototype.controller[ctrl.name] = ctrl.controller;
})

const app = new koa();


app.use(setRouters(app));//引入router中间件

app.listen(3000, '127.0.0.1', () => {
    console.log('服务器启动');
})