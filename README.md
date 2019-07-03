# koa-dynamic-router
Koa 自动添加路由模块，项目启动，自动注册路由！

## 核心代码
```js

const Router = require('koa-router');
const router = new Router();

const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname);

files
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
        const file_name = file.substr(0, file.length - 3);
        const file_entity = require(path.join(__dirname, file));
        if (file_name !== 'index') {
            router.use(`/${file_name}`, file_entity.routes(), file_entity.allowedMethods())
        }
    });

module.exports = router;


```
