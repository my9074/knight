module.exports = {
    async getAppList(ctx, service, app) {
        console.log(app.config.appName);
        await service.app.apps();
        ctx.body = 'getAppList';
    },
    async getAppInfo(ctx, service, app) {
        console.log(app.config.appName);
        await service.app.app();
        ctx.body = 'getAppInfo';
    }
};