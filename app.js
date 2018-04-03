const koa = require('koa');
const router = require('koa-router');

const app = new koa();
const Router = new router();

Router.get('/', (ctx, next) => {
    ctx.body = 'hello';
})


app.use(Router.routes());

app.listen(3000, '127.0.0.1', () => {
    console.log('服务器启动');
})