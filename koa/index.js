const Koa = require('koa');
const Router = require('koa-router');
const render = require('koa-art-template');
const path = require('path');
const serve = require('koa-static');

let app = new Koa();
let home = new Router();
let admin = new Router();
let router = new Router();

render(app, {
    root: path.join(__dirname, 'view'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});
app.use(serve(__dirname + '/public'));

app.use(async (ctx, next) => {
    let date1 = +(new Date());
    await next();
    let date2 = +(new Date());
    console.log('responseTime:', date2-date1);
});

router.get('/', async (ctx) => {
    ctx.cookies.set('login', 'hello world',{maxAge:3600*1000,httpOnly:false});
    await ctx.render('index',{data:'artContext'});
});

admin.get('/', async (ctx) => {
    console.log(ctx.cookies.get('login'));
    ctx.body = 'admin getuserinfo';
});

router.use('/admin', admin.routes(), admin.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, (err)=>{
    err&&console.log(err);
    !err&&console.log('your application listening localhost:3000')
});
