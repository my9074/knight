const getAppList = async (ctx, next) => {
    ctx.body = 'getAppList';
}

const getAppInfo = async (ctx, next) => {
    ctx.body = 'getAppInfo';
}

/**
 * 注意，我们规定HTTP方法放在前面，path放在后面，中间用空格隔开
 */
module.exports = {
    'get /apps': getAppList,
    'get /app': getAppInfo
}