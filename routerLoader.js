const router = require('koa-router');
const Router = new router();
const fs = require('fs');

/**
 * 返回router中间件
 */
const setRouters = (app) => {
    const routers = require('./routers')(app)
    Object.keys(routers).forEach(key => {
        const [method, path] = key.split(' ');
        Router[method](path, routers[key]);
    })
    return Router.routes() //Router.routes() 返回的是中间件回调函数
}

module.exports = setRouters;