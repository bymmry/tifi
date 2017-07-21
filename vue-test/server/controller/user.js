const model = require('../db')
module.exports = {
	user: {
		response: async ctx => {
			let {
				method,
				url,
				query,
				querystring
			} = ctx
			let postback = {
				method,
				url,
				query,
				querystring
			}
			let user = new model.user({
				name: 'test',
				phone: 18983847794,
				password: '123456'
			})
			let hasPhone = await model.user.findOne({
				phone: user.phone
			}).catch((err) => {
				ctx.body = {
					code: 402,
					info: '数据库读取失败',
					err: err
				}
			})
			if (hasPhone) {
				ctx.body = {
					code: 401,
					info: '手机号已被注册',
					body:postback
				}
			} else {
				await user.save().catch((err) => {
					ctx.body = {
						code: 402,
						info: '存储失败',
						err: err
					}
				})
				ctx.body = {
					code: 200,
					msg: '新建用户成功',
					body:postback
				}
			}
		}
	}
}
