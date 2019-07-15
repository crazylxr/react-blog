const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const logger = require('koa-logger')
const path = require('path')
const views = require('koa-views')
const static = require('koa-static')
const errorHandle = require('./middlewares/errorHandle')
const checkToken = require('./middlewares/checkToken')

const compress = require('koa-compress');
const router = require('./router')
const db = require('./models')

const app = new Koa()


app.use(
  compress({
    threshold: 1024, // 阀值，当数据超过1kb的时候，可以压缩
    flush: require('zlib').Z_SYNC_FLUSH // zlib是node的压缩模块
  })
)

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './public'

app.use(static(
  path.join( __dirname,  staticPath)
))

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use( async ( ctx ) => {
  ctx.compress = true

  await ctx.render('index', {})
})

app
  .use(cors())
  .use(errorHandle)
  .use(checkToken)
  .use(logger())
  .use(bodyParser())

app.use(router.routes(), router.allowedMethods())

app.listen(6060, () => {
  db.sequelize
    .sync({ force: false, logging: false }) // If force is true, each DAO will do DROP TABLE IF EXISTS ..., before it tries to create its own table
    .then(() => {
      // require('./initData')()

      console.log('sequelize connect success')
      console.log('sever listen on http://127.0.0.1:6060')
    })
    .catch(err => {
      console.log(err)
    })
})
