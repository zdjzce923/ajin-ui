---
title: 'Toast - 弹出提示框'
---

# 弹出提示框

## 预览

&nbsp;
<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

## 使用方法

想要使用 Toast 组件，首先需要引入该组件,然后使用 Vue 官方文档中插件的使用方法使用该插件。  
代码

```vue
<template>
  <div>
    <j-button @click="onClickButton2">会自动关闭</j-button>
    &nbsp;&nbsp;
    <j-button @click="onClickButton">点击按钮才关闭</j-button>
    &nbsp;&nbsp;
    <br />
    <j-button @click="top">上方弹出</j-button>
    <j-button @click="middle">中间弹出</j-button>
    <j-button @click="bottom">下方弹出</j-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from '../../../src/toast'
import Button from '../../../src/button'
import plugin from '../../../src/plugin.js'

Vue.use(plugin)
export default {
  components: { 'j-toast': Toast, 'j-button': Button },
  methods: {
    onClickButton() {
      this.$toast(' toast 内容', {
        closeButton: {
          text: '关闭',
          callback: () => {
            console.log('关闭了')
          },
        },
      })
    },
    onClickButton2() {
      this.$toast(' toast 内容', {
        autoClose: 2,
        closeButton: {
          text: '关闭',
          callback: () => {
            console.log('关闭了')
          },
        },
      })
    },
    top() {
      this.$toast(' toast 内容', { position: 'top', autoClose: 3 })
    },
    middle() {
      this.$toast(' toast 内容', { position: 'middle', autoClose: 3 })
    },
    bottom() {
      this.$toast(' toast 内容', { position: 'bottom', autoClose: 3 })
    },
  },
}
</script>
```

## 选项

1.  autoClose
    此选项可以设定 Toast 自动关闭的延时。单位为“ 秒 ”，默认延时 5 秒后自动关闭。
2.  closeButton  
    Toast 组件的右侧按钮文本可编辑，并且支持传入一个回调。 closeButton 选项接收一个对象。对象包括 text 与 callback 属性。用于设定按钮的文本与回调。  
    代码

    ```vue
    <template>
      <div>
        <j-button @click="auto">点我</j-button>
      </div>
    </template>
    <script>
    import Vue from 'vue'
    import Toast from '../../../src/toast'
    import Button from '../../../src/button'
    import plugin from '../../../src/plugin'

    Vue.use(plugin)
    export default {
      components: { 'j-toast': Toast, 'j-button': Button },
      methods: {
        auto() {
          this.$toast('我是 toast 内容', {
            autoClose: 5,
            closeButton: {
              text: '确定',
              callback: () => {
                console.log('回调的输出')
              },
            },
          })
        },
      },
    }
    </script>
    ```

3)  enableHtml  
    Toast 组件还支持 HTML 语法，该功能默认关闭，你需要传递一个 enableHTML 参数来开启它, `enableHtml:true` 。 开启后就可以在 Toast 内容区域写 HTML 语法。

4)  position  
    可以设定 Toast 弹出的位置 ，支持 top, middle, bottom 三个值。
    `vue this.$toast('我是 toast 内容', { position: 'top' })`
