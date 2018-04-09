const getUser = async (ctx, next) => {
    ctx.body = 'getUser';
}

const getUserInfo = async (ctx, next) => {
    ctx.body = 'getUserInfo';
}

/**
 * 注意，我们规定HTTP方法放在前面，path放在后面，中间用空格隔开
 */
module.exports = {
    'get /': getUser,
    'get /getUserInfo': getUserInfo
}