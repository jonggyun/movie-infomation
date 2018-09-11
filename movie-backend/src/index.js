const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

const api = require('./api');

router.use('/api', api.routes()); // api 경로에 있는 router를 사용하자.

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods()); // router를 사용하면 app에 router를 등록해야한다!!

app.listen(4000, () =>{
    console.log('listening to port 4000');
});