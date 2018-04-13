module.exports = {
    async getAppList(ctx, service) {
        await service.app.apps();
        ctx.body = 'getAppList';
    },
    async getAppInfo(ctx, service) {
        await service.app.app();
        ctx.body = 'getAppInfo';
    }
};