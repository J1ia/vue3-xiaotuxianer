# xiaotuxian

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

1. git管理仓库
基于create-vue创建出来的项目默认没有初始化git仓库，需要手动初始化

执行命令并完成首次提交：
（1）git init
（2）git add .
（3）git commit -m "init"

2. 配置@

3. 按需导入 element-plus
通用型组件 ElementPlus  --- Dialog模态框
业务定制化组件（手写） --- 商品热榜组件

4. 将项目需要的主题色覆盖elemnt-plus中的颜色  --- 定制主题色

5. 配置axios
基地址、超时时间、请求拦截器、响应拦截器

6. 路由配置
找页面的切换方式，如果是整体切换，则为一级路由，如果是在一级路由的内部进行的内容切换，则为二级路由

7. 自动导入sass样式配置
（1）新增一个var.scss文件，存入色值变量
（2）通过vite.config.js配置自动导入文件

8. 引入字体图标： font-class引用方式

9. 获取数据，渲染一级导航

10. 吸顶交互
页面滚动>78px,出现固定导航

利用vueuse插件，导入useScroll

11. 采用pinia优化导航和吸顶交互的数据重复获取

12. home模块    
左侧导航 + banner轮播图

13. 新鲜好物和人气推荐， 封装组件
采用props和插槽

14. 图片懒加载指令实现
自定义指令  --- 写在了入口文件

优化： 入口文件通常只做一些初始化的事情，不应该包含太多的逻辑代码
    ---- 通过插件的方法把懒加载指令封装为插件，main.js中只需要负责注册插件即可

对于元素监听是一直存在的，除非手动停止监听，存在浪费内存
解决思路：在监听的图片第一次完成加载之后就停止监听

15. goods-product渲染
组件封装， 图片懒加载

16. 一级分类 --- 面包屑

17. 轮播图定制
一级路由和二级路由轮播图根据传入参数不同，展示不同的轮播图

18. 响应路由参数的变化
当使用带有参数的路由时需要注意：当路由切换时，相同的组件实例将会被重复使用。因为两个路由都渲染同个组件，比起销毁在创建，复用显得更加高效。不过，也意味着组件的生命周期钩子不会被调用。从而导致数据无法更新。

也就是：路由只有参数变化时，会复用组件实例

解决： 1. 让组件实例不再复用，强制销毁重建 ---- 当前完整路径为key的值，
          给router-view组件绑定 ---- 带来的问题： 重复的数据也会重新请求， 比较暴力
       2. 监听路由变化，变化之后执行数据更新操作  --- 精细化控制，性能好

19. 将category的业务逻辑拆分成各个单独的业务逻辑
useCategory.js
useBanner.js

20. 二级路由列表渲染
(1) 获取列表数据

* @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */

 (2) 根据data中sortField值，重新发送列表请求
 (3) 列表无限加载功能实现
 使用elementPlus提供的v-infinite-scroll指令监听是否满足触底条件，满足加载条件时让页数参加加一获取下一页数据，做新老数据拼接渲染

 21. 路由滚动行为定制
 当路由切换时，新路由界面自动滚到到顶部，从顶部开始