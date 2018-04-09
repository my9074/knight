const router = require('koa-router');
const Router = new router();

const User = require('./router/user');//倒入模块

/**
 * 添加router
 */
const addRouters = (router) => {
    Object.keys(router).forEach((key) => {
        const route = key.split(' ');

        console.log(`正在映射地址:${route[1]}--->HTTP Method:${route[0].toLocaleUpperCase()}--->路由方法:${router[key].name}`)
        Router[route[0]](route[1], router[key])
    })
}

/**
 * 返回router中间件
 */
const setRouters = () => {
    addRouters(User);
    return Router.routes() //Router.routes() 返回的是中间件回调函数
}

module.exports = setRouters;