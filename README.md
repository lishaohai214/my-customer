# my-customer

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


#### 启动项目之前，得把 json-server 启动了

[克隆 json-server ](https://github.com/lshaohai/json-server.git)

#### $  npm run json-server



#### 如果 需要 npm run build  需要改两个地方，

    第一，config里面的 index.js 改成下面的
        assetsPublicPath: './'  
    第二将 main.js 的路由 下面这个 删掉
        mode:'history' 



[HTML5 History 模式](https://router.vuejs.org/zh-cn/essentials/history-mode.html)
[Vue下路由History mode导致页面无法渲染的原因](https://blog.csdn.net/xjlinme/article/details/74783887)

[vue项目run build后在本地还是一片空白](https://segmentfault.com/q/1010000010464754)

[VSCode拓展插件推荐（HTML、Node、Vue、React开发均适用](https://github.com/varHarrie/varharrie.github.io/issues/10)


