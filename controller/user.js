module.exports = {
    async getUser(ctx, service) {
        await service.user.user();
        ctx.body = 'getUser';
    },
    async getUserInfo(ctx, service) {
        await service.user.getUserInfo();
        ctx.body = 'getUserInfo';
    }
};