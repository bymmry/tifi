const koa = require('koa')
const app = new koa()
const router = require('./router')
// 对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

let port = 4000
app.listen(port)
console.log(`app started at port ${port}...`);
