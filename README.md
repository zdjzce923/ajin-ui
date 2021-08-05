# 阿金 UI - 一个 Vue UI 组件

## 介绍

这是一个 Vue 的 UI 框架，是我在学习过程中参考 Element-ui 做的。
包含 Button Input Grid Layout Tabs Toast Popover Collapse 八个组件。

## 开始使用

1. 添加 CSS 样式
   使用本框架前，请在 CSS 中开启 border-box

```
*,*::before,*::after{box-sizing: border-box;}
```

IE 8 及以上浏览器都支持此样式。

2. 安装 ajin-ui-demo

```
npm i --save ajin-ui-demo
```

3. 引入 ajin-ui-demo

```
import {Button, ButtonGroup, Icon,Col, Collapse, CollapseItem, Content, Footer, Header, Input, Layout, Popover
         , Row, Sider, Tabs, TabsHead, TabsBody, TabsItem, TabsPane, Toast,plugin
       } from 'ajin-ui-demo'
import 'ajin-ui-demo/dist/index.css'
import Vue from 'vue'
Vue.use(plugin)

export default {
  name: 'app',
  components: {
        'j-button':Button,
        'j-icon':Icon,
        'j-button-group':ButtonGroup,
        'j-col':Col,
        'j-collapse':Collapse,
        'j-collapse-item':CollapseItem,
        'j-content': Content,
        'j-footer': Footer,
        'j-header': Header,
        'j-input': Input,
        'j-layout': Layout,
        'j-popover': Popover,
        'j-row': Row,
        'j-sider': Sider,
        'j-tabs': Tabs,
        'j-tabs-head': TabsHead,
        'j-tabs-body': TabsBody,
        'j-tabs-item': TabsItem,
        'j-tabs-pane': TabsPane,
        'j-toast': Toast,
 }
}

```

## 文档

[文档链接](https://zdjzce923.github.io/ajin-ui/)
