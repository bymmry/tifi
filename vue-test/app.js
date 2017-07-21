const koa = require('koa')
const app = new koa()
const router = require('koa-router')()
router.get('/', ctx =>{
	ctx.body = 'Hello koa2'
})
router.get('/user', ctx =>{
	ctx.body = 'user'
})
router.get('/test', ctx =>{
	ctx.body = 'test'
})
// 对于任何请求，app将调用该异步函数处理请求
app.use(router.routes())
app.use(router.allowedMethods())
let port = 4000
// 在端口4000监听
app.listen(port)
console.log(`app started at port ${port}...`);
