## 项目初始化

### 1. vue-cli 

 - 安装vue 

   ```bash
   npm install -g @vue/cli
   # OR
   yarn global add @vue/cli
   ```

 - 目录下执行  ` vue create project-name`   // project-name 为项目名称

 - 选择 `Manually select features`   // 手动选择功能
![image-20211011095145267](static\image-20211011095145267.png)

- 选择所需要的功能模块
![image-20211011101234608](static\image-20211011101234608.png)

 - 选择vue版本
![image-20211011101641685](static\image-20211011101641685.png)

- 选择路由模式 【history】
![image-20211011101926967](static\image-20211011101926967.png)

- 选择css预编译 less
![image-20211011102103120](static\image-20211011102103120.png)

- 选择代码检测和代码格式化模块 【ESlint + Prettier】
![image-20211011102233607](static\image-20211011102233607.png)

- lintOnSave【保存时检查】
![image-20211011102432200](static\image-20211011102432200.png)

- 选择独立文件配置模式
![image-20211011102538728](static\image-20211011102538728.png)

- 设置保存【N】
![image-20211011102850495](static\image-20211011102850495.png)

## 目录结构


| 目录/文件    | 重要度 | 说明 |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| build        | 3                                      | 配置目录，包括端口号等                                       |
| public | 6 | index.html                     // 页面模板<br />favicon.ico                     // 偏爱图标 |
| node_modules | 1                                      | npm 加载的项目依赖模块                                       |
| src          | 10 | 这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件 |
| package.json | 2 | 项目配置文件 |
| package.lock.json | 2 | 项目配置文件 |
| README.md | 5 | 项目的说明文档，markdown 格式，项目关键内容开发指导 |
| vue.config.js | 8 | 详见： https://cli.vuejs.org/zh/config/ |
| .env | 5 | 全局默认配置文件，不论什么环境都会加载合并 |
| .env.development | 5 | 开发环境下的配置文件 |
| .env.production | 5 | 生产环境下的配置文件 |
| .eslintrc.js | 6 | eslint 检测规则配置文件 |
| .prettierrc.js | 6      | 代码格式化配置文件 |
| .browserslistrc | 1 | 浏览器兼容性设置 |
| .gitignore | 3      | git 忽略文件设置 |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |
|              |                                                              |                                                              |





## 请求封装

api 设置

axios 封装

请求封装



##  Vuex 全局状态

mapState

mapAction



## 路由【router】

### 路由缓存 

``` html
<keep-alive>
    <router-view />
</keep-alive>
```



### 路由懒加载

```javascript
const route1 =  () => import('./pathto/route1')
```





## Vue 风格指南

详见：https://cn.vuejs.org/v2/style-guide/   // vue官方风格指南



## Other

less

## 代码检查【Eslint】

编写代码符合eslint规范

提交代码用`npm run lint`做代码检测和自动格式化



## 环境参数设置

.env

.env.development

.env.production
