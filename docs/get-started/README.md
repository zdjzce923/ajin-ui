---
title: '快速上手'
---

# 快速上手

## 引入必要资源

```javascript
import { button } from 'ajin-ui-demo'
import 'ajin-ui-demo/dist/index.css'
```

## 注册组件

```javascript
export default {
  name: 'ComponentName',
  components: {
    'j-button': button,
  },
}
```

## 使用

代码：

```vue
<template>
  <div>
    <j-button>默认按钮</j-button>
  </div>
</template>
```

效果：
<ClientOnly>
<get-started-button-demo></get-started-button-demo>
</ClientOnly>
