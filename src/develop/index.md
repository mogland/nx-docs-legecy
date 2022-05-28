# 编写前端项目

<br /> 

:::tip
本文来自 Mix Space 文档 

https://mx-docs.iucky.cn/dev/frontend.html
:::

该系统采用了前端和后端分离的形式，而不提供模板呈现选项，因此开发人员可以使用任何框架和体系结构设计前端项目。

虽然开发是自由的，但也存在接口调用和数据定义、路由约定等不便。在本节中，我将介绍如何开发前端项目

## 路由约定

路由约定可以极大地保证网站因为更换不同的前端主题而导致SEO异常、死链接等问题。


| Path                     | Descrition                             | Mark        |
| ------------------------ | -------------------------------------- | ----------- |
| `/`                      | 首页                                   | 强制要求   |
| `/posts`                 | 博客文章列表                            | 强制要求   |
| `/posts/:category/:slug` | 博客文章详情页                          | 强制要求   |
| `/pages/:slug`           | 独立页面详情页                          | 强制要求   |
| `/notes/:nid`            | 日记详情页                              | 强制要求   |
| `/feed`                  | RSS subscribe                          | 强制要求   |
| `/:category/:slug`       | 302 -> `/posts/:category/:slug`        | 建议       |
| `/category/:slug`        | 分类下的文章列表页面                     | 建议       |
| `/notes`                 | 日记 列表 / Jump to the 最新的日记       | 建       |
| `/notes/latest`          | 最新的日记详情页                         | 建议      |
| `/friends`               | 友链页面                                | 建议       |
| `/says`                  | 一言详情页                              | 可选       |
| `/sitemap`               | 站点地图                                | 建议       |
| `/timeline`              | 时间线                                  | 可选      |
| `/recently`              | 动态页面                                | 可选      |
| `/favorite/:type`        | 附加页面                                | 可选      |
| `/projects`              | 项目页面                                | 可选      |
| `/projects/:id`          | 项目详情页                              | 可选      |

## 关于框架的选择和建议

建议选用具有SSR功能的现代框架:

- React：NextJS, [RakkasJS](https://github.com/rakkasjs/rakkasjs), umi
- Vue: Vite (vite-ssr), NuxtJS

小程序:

- React: Remax, taro
- Vue: uni-app