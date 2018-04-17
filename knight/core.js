const koa = require('koa');
const koaRoute = require('koa-router');
const Loader = require('./loader')

class Knight extends koa {
    constructor(props) {
        super(props);
        this.router = new koaRoute();
        this.loader = new Loader();
        this.controller = {};
        this.config = {};

        this.loader.loadController().forEach(crl => {
            this.controller[crl.name] = crl.module;
        });

        this.loader.loadConfig().forEach(config => {
            this.config = { ...this.config, ...config.module }
        });
    }

    setRouters() {
        const _setRouters = (app) => {
            const routers = require('../routers')(app);
            const svs = {};
            app.loader.loadService().forEach(service => {
                svs[service.name] = service.module;
            })
            Object.keys(routers).forEach(key => {
                const [method, path] = key.split(' ');
                app.router[method](path, ctx => {
                    const handler = routers[key];
                    handler(ctx, svs, app);
                })
            })
            return app.router.routes()
        }
        this.use(_setRouters(this));
    }
}

module.exports = Knight;