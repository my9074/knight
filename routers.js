module.exports = (app) => {
    return {
        'get /user': app.controller.user.getUser,
        'get /userDetail': app.controller.user.getUserInfo,
        'get /apps': app.controller.app.getAppList,
        'get /app': app.controller.app.getAppInfo
    }
}