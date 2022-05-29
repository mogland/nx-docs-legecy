# 配置项

## 启动时

一般来说，启动时的环境变量都是一致的，不同的启动方式可能应用到的变量不同，**为了你日后可以流畅切换不同的变量，我推荐你全部填写好**

以下是目前支持的环境变量：

- PORT：监听端口，默认 `3000`
- DB_DATABASE：数据库名，默认 `nest-server`
- DB_HOST：数据库主机，默认 `127.0.0.1`
- DB_PORT：数据库端口，默认 `3306`
- DB_USERNAME：数据库用户名，默认 `root`
- DB_PASSWORD：数据库密码，默认值 `moonwibus`
- CORS_SERVER：允许跨域来源，默认值请看代码
- JWT_KEY：jwt密钥，不建议使用默认值
- theme：视图引擎模板设置，详情请见 **「EJS Templates Engine」** 章节


:::tip
在 「开始使用」 章节 docker 段，有这么一段话：

> 首先你需要 复制 `.env.example` 为 `.env` 修改里面的配置...

你需要注意的是：变量储存文件 `.env` 是给 docker 和 编译运行使用的，若你使用 Bundle 启动，env文件不适合你，你需要使用`后置 args` 来指定变量。
如：
```bash
node index.js --PORT=3001 --DB_DATABASE=nest-server --DB_HOST=127.0.0.1 --DB_PORT=3306 --DB_USERNAME=root --DB_PASSWORD=moonwibus
```
:::