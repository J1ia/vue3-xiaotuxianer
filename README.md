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