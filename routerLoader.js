const router = require('koa-router');
const Router = new router();
const fs = require('fs');
const services = require('./loader').loadService();

/**
 * 返回router中间件
 */
const setRouters = (app) => {
    const routers = require('./routers')(app)

    let svs = {}
    services.forEach(service => {
        svs[service.name] = service.module;
    })

    Object.keys(routers).forEach(key => {
        const [method, path] = key.split(' ');
        Router[method](path, ctx => {
            const handler = routers[key];
            handler(ctx, svs);
        });
    })
    return Router.routes() //Router.routes() 返回的是中间件回调函数
}

module.exports = setRouters;