const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
  ctx.body = 'Hello Docker\nUpdated!!!'
})

app.listen(8000)
