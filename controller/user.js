module.exports = {
    async getUser(ctx, service, app) {
        console.log(app.config.userName);
        await service.user.user();
        ctx.body = 'getUser';
    },
    async getUserInfo(ctx, service, app) {
        console.log(app.config.userName);
        await service.user.getUserInfo();
        ctx.body = 'getUserInfo';
    }
};