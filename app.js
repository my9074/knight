const knight = require('./knight/core');
const app = new knight();

app.setRouters();
app.listen(3000, '127.0.0.1', () => {
  console.log('服务器启动');
})
