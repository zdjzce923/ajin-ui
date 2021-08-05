---
title: 'Tabs - 标签'
---

# 标签

## 预览

&nbsp;
<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

## 使用方法

此组件的 j-tabs j-tabs-item j-tabs-pane 必须有一一对应的 name。

```vue
<template>
  <div class="tabs-wrapper">
    <j-tabs :selected.sync="selectedTab">
      <j-tabs-head>
        <j-tabs-item name="tab1">
          <j-icon icon-name="settings"></j-icon>
          Tab1
        </j-tabs-item>
        <j-tabs-item name="tab2">Tab2</j-tabs-item>
        <j-tabs-item name="tab3">Tab3</j-tabs-item>
        <j-tabs-item name="tab4">Tab4</j-tabs-item>
      </j-tabs-head>
      <j-tabs-body>
        <j-tabs-pane name="tab1">内容1</j-tabs-pane>
        <j-tabs-pane name="tab2">内容2</j-tabs-pane>
        <j-tabs-pane name="tab3">内容3</j-tabs-pane>
        <j-tabs-pane name="tab4">内容4</j-tabs-pane>
      </j-tabs-body>
    </j-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return { selectedTab: 'tab1' }
  },
}
</script>
```

## 选项

1. 默认高亮状态
   j-tabs 需要设置<span style='color:#3eaf7c;background-color:#F8F8F8'> selected </span>属性来确定默认标签。  
   你可以这样：`:selected.sync="selectedTab"`,其中 <span style='color:#3eaf7c;background-color:#F8F8F8'>selectedTab </span>是你需要传递的默认值。  
   并且该标签的子组件应该是 j-tabs-head 和 j-tabs-body ，否则你会得到一个警告。
2. disabled 状态
   <span style='color:#3eaf7c;background-color:#F8F8F8'>disabled</span> 属性用于 j-tabs-item 标签，可以设置该标签的不可用状态。
