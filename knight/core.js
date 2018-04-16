const koa = require('koa');
const fs = require('fs');
const koaRoute = require('koa-router');

class KnightLoader {
    removeString(source) {
        const string = 'knight';
        const index = source.lastIndexOf(string);
        const len = string.length;
        return source.substring(0, index);
    }

    loader(path) {
        const dir = fs.readdirSync(path);
        return dir.map((filename) => {
            const module = require(path + '/' + filename);
            return { name: filename.split('.')[0], module };
        })
    }

    loadController() {
        const url = this.removeString(__dirname) + '/controller';
        return this.loader(url);
    }

    loadService() {
        const url = this.removeString(__dirname) + '/service';
        return this.loader(url);
    }

    loadConfig() {
        const url = this.removeString(__dirname) + '/config';
        return this.loader(url);
    }
}

class Knight extends koa {
    constructor(props) {
        super(props);
        this.router = new koaRoute();
        this.loader = new KnightLoader();
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