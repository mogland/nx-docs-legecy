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

## 评论 API


在前端处理中，若非**主人驾到**，在POST请求中需要将isOwner字段设置为1。这是第一层防护冒充主人的评论；第二层将会出现在在先前*2 headers的设置*中，通过Token验证，再来防护主人评论

**第二点**：需要做第一层XSS防护，虽然在后端已经做了一层XSS防护，但是若要将安全性提高，请务必在前端也要进行XSS处理

**第三点**：发起请求前**建议获取**`ipAddress`, `userAgent`并将其填入POST表单 以提高后端响应速度，但此受限于访客方面问题

> 您还可以选择不为请求获取IP和用户代理。


```js {6,9}
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'type': 'post',
  'path': 'hello_well',
  'content': '快递淘宝 <script>alert(\'xss\')</script>',
  'author': 'wibusbot',
  'owner': 'wibusbot',
  'isOwner': '1',
  'email': 'wibus@qq.com',
  'url': 'xxxxx',
  'key': 'xxxxx',
  'hasChild': 'false',
  'ipAddress': 'xxxx',
  'userAgent': 'xxxx',
  'state': '0' 
});
var config = {
  method: 'post',
  url: 'http://localhost:3000/api/v1/comment/create',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

::: warning
上面的示例没有对文章内容进行`XSS过滤`，但是在实际开发中要注意这一点。
:::