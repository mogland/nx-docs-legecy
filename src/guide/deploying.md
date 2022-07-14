# 部署 NEXT

## 服务端部署

**_目前 nx-server 依赖于 nodejs14以上, Mongo, Redis 环境_**

nx-server 有两种启动方式：运行 bundle **(recommended)** / 编译运行 (for development)

<!-- 
### Docker 部署  (Beta)

> Beta 功能，稳定性不确定，但大体是可以正常使用了

Docker Hub：https://hub.docker.com/r/wibuswee/nx-server

目前是每一次发 Release 就会上传一次 Docker，或者我手动上传（有的时候还没到发release的时期）

首先你需要 复制 `.env.example` 为 `.env` 修改里面的配置，配置如「Bundle 启动」大体一致，有些是不应用的（DB_HOST,DB_PORT暂时不应用）

```bash
docker compose pull # 拉取最新镜像
docker compose up -d # 启动/restart容器
```

关于反向代理：默认的 docker-compose 已设置为映射到 .env 中的 PORT 所设置的端口上，根据 PORT 进行反代即可 -->

### Bundle 部署 (Beta)

> Beta 功能，稳定性不确定，但大体是可以正常使用了

若您不是开发者，则我推荐你使用 Bundle 启动此项目，bundle目前已在 Artifacts 和 Release 中发布。

在 Release 页面下载稳定版 **nx-server.zip**，或在 Action 产物中下载开发版 **nx-server.zip** 解压缩，进入文件夹运行如以下命令：

```bash
node index.js --PORT=3001 --DB_DATABASE=nest-server --DB_HOST=127.0.0.1 --DB_PORT=3306 --DB_USERNAME=root --DB_PASSWORD=moonwibus
```

:::warning
此方法启动的无法持续化，你需要对 ecosystem.config.js 进行更改
:::

若你需要手动打包 bundle，可以使用如下命令：

```bash
npm run bundle
```

产物位于 out 文件夹下，可以直接运行。

**请注意，使用bundle启动时 你需要后置参数：**

- PORT：监听端口，默认 `3000`
- DB_DATABASE：数据库名，默认 `nest-server`
- DB_HOST：数据库主机，默认 `127.0.0.1`
- DB_PORT：数据库端口，默认 `3306`
- DB_USERNAME：数据库用户名，默认 `root`
- DB_PASSWORD：数据库密码，默认值 `moonwibus`
- CORS_SERVER：允许跨域来源，默认值请看代码
- JWT_KEY：jwt密钥，不建议使用默认值
- theme：视图引擎模板设置，详情请见 **「EJS Templates Engine」** 章节
- ENGINE：若你需要使用到*视图引擎*，则你可以将此设置为 `1`，默认不启动，详情请见 **「EJS Templates Engine」** 章节


#### 持续化启动

需要改变 apps 的 script 字段

```js {5}
module.exports = {
  apps: [
    {
      name: 'nx-server',
      script: 'out/index.js',
      autorestart: true,
      // ...
    }
  ]
}
```

启动也需要相应变化，从原本的 `node index.js ...args` 至如以下命令：

```bash
pm2 start ecosystem.config.js -- --...args
```

由于 pm2 的限制，需要在 `ecosystem.config.js` 中先添加 `--` 才可附带后置参数，当然你也可以写死在args中：`--PORT=3000`等


<!-- - MAIL_SERVER：邮箱服务器（有可能后期会移入后台进行设置）
- MAIL_PORT：邮箱端口号（有可能后期会移入后台进行设置）
- MAIL_ADD：邮箱地址（有可能后期会移入后台进行设置）
- MAIL_PASS：邮箱密码（有可能后期会移入后台进行设置） -->

### bundle.zip 与 nx-server.zip 的区别？

bundle.zip 是只有一个 index.js，不包含默认主题与视图文件夹，一般来说我不推荐你使用此压缩包 ❌

nx-server.zip 是一个完整的项目，包含默认主题与视图文件夹，一般来说我推荐你使用此压缩包 ✅

下图为标准的 nx-server.zip 压缩包内容

<img src="/img/ejs_feat.png" style="zoom: 50%" alt="ejs_feat">

### EJS Templates Engine (Beta)

> 🧪 实验性功能，可能会有 bug，请谨慎使用。

由于 Express 支持配置视图引擎 EJS，因此 NextSpace 可以使用 EJS 作为模板引擎。视图文件夹为 `views`，模板文件夹为 `views/{templatesName}` 默认配置为 `views/default`

模板的选择有两种方式：`process.env` 和 数据库的 `Configs` 表，以 `env` 为最高优先级，若都无配置，则默认使用 `default`

推荐你使用 bundle 运行服务端以使用此feature，详情请见 **「Bundle 部署」** 章节

### 编译部署

请自行配置好Nodejs和MySQL环境，并在本地运行如下命令：

```bash
pnpm i
pnpm build
node dist/main --...args # 后置参数请看「Bundle 部署」章节
```

:::warning
此方法启动的无法持续化，你需要对 ecosystem.config.js 进行更改
:::

#### 持续化启动

需要改变 apps 的 script 字段

```js {5}
module.exports = {
  apps: [
    {
      name: 'nx-server',
      script: 'pnpm prod:start',
      autorestart: true,
      // ...
    }
  ]
}
```

启动也需要相应变化，从原本的 `pnpm prod:start` 至如以下命令：

```bash
pm2 start ecosystem.config.js -- --...args
```

由于 pm2 的限制，需要在 `ecosystem.config.js` 中先添加 `--` 才可附带后置参数，当然你也可以写死在args中：`--PORT=3000`等

### 开发环境

```bash
pnpm i
pnpm start:dev
```

## 前端部署

若是官方的前端库. 一般来说都是使用 React 进行开发的，你可以参照下面的命令进行部署：

```bash
pnpm i
pnpm build
pnpm prod:pm2 -- --...args
```

具体可以参考 [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/) 和服务端部署的使用方法
