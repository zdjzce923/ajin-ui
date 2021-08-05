<template>
  <div class="j-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AjinGroup",
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.error(`j-button-group 的子元素应是 g-button 而你写的是${name}`);
      }
    }
  },
};
</script>

<style lang='scss'>
.j-button-group {
  display: inline-flex;
  vertical-align: middle;
  font-size: 14px;
  $border-radius: 4px;
  > .j-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      z-index: 1;
    }
  }
}
</style>