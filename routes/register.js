const Router = require('koa-router');
const router = new Router();

// router.prefix('/login')

router.get('/', async ctx=> {
    ctx.body = 'register'
})

router.get('/quickRegister', async ctx=> {
    ctx.body = 'quickRegister'
})


module.exports = router;
