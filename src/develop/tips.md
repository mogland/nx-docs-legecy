# 开发注意

## 请求中的头设置

::: warning
请求接口时，如果管理员已经登录，请务必在头中添加`Authorization`字段，其授权Token Type为`Bearer`。
:::

尽管Token的检测在后端处理中没有完全使用，为了防止将来的版本迁移问题，编写标准头是必要的。

```js {6,7,8}
let axios = require('axios');

let config = {
  method: 'get',
  url: 'http://localhost:3000/api/v1/ping',
  headers: { 
    'Authorization': 'Bearer HereIsToken'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```