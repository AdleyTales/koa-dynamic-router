const Router = require('koa-router');
const router = new Router();

// router.prefix('/3')

router.get('/', async ctx=> {
    ctx.body = 'login'
})

router.get('/quickLogin', async ctx=> {
    ctx.body = 'quickLogin'
})


module.exports = router;
