---
title: 'Layout - 布局'
---

# 布局

## 预览

&nbsp;
<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>

### 使用方法

```vue
<template>
  <div>
    <j-layout style="color: white; margin-bottom: 50px">
      <j-header style="height: 50px; background: #81d2ad">header</j-header>
      <j-content style="height: 100px; background: #3faf7c">
        content
      </j-content>
      <j-footer style="height: 50px; background: #81d2ad">footer</j-footer>
    </j-layout>
  </div>
</template>
```

## 预览

&nbsp;
<ClientOnly>
<layout-demo2></layout-demo2>
</ClientOnly>

### 使用方法

```vue
<template>
  <div>
    <j-layout style="color: white; overflow: hidden; margin-bottom: 50px">
      <j-header style="height: 50px; background: #81d2ad">header</j-header>
      <j-layout>
        <j-sider style="height: 100px; background: #66be9e; width: 200px; color: white">
          sider
        </j-sider>
        <j-content style="height: 100px; background: #3faf7c">
          content
        </j-content>
      </j-layout>
      <j-footer style="height: 50px; background: #81d2ad">footer</j-footer>
    </j-layout>
  </div>
</template>
```

## 预览

&nbsp;
<ClientOnly>
<layout-demo3></layout-demo3>
</ClientOnly>

### 使用方法

```vue
<template>
  <div>
    <j-layout style="color: white; margin-bottom: 50px">
      <j-sider style="background: #66be9e; width: 200px; color: white">
        sider
      </j-sider>
      <j-layout>
        <j-header style="height: 50px; background: #81d2ad">header</j-header>
        <j-content style="height: 100px; background: #3faf7c">
          content
        </j-content>
        <j-footer style="height: 50px; background: #81d2ad">footer</j-footer>
      </j-layout>
    </j-layout>
  </div>
</template>
```

## 选项

提供基础布局，样式自定义。

### 组件概述

- <span style='color:#3eaf7c;background-color:#F8F8F8'> j-layout </span>：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> j-header </span>：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> j-sider </span>：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> j-content </span>：内容部分，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> j-footer </span>：底部布局，其下可嵌套任何元素，只能放在 Layout 中。
