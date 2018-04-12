const router = require('koa-router');
const Router = new router();
const fs = require('fs');

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
 * 扫描目录
 */
const Scan = () => {
    const url = './router';
    const dir = fs.readdirSync(url)//同步方法无所谓的，因为是在服务器跑起来之前就完成映射，不会有任何性能影响
    console.log('扫描路由目录----> ', dir)

    dir.forEach((filename) => {
        const routerModel = require(url + '/' + filename);
        addRouters(routerModel);
    })
}

/**
 * 返回router中间件
 */
const setRouters = () => {
    Scan();
    return Router.routes() //Router.routes() 返回的是中间件回调函数
}

module.exports = setRouters;