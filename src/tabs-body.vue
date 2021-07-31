<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AjinTabsBody",
  inject: ["eventBus"],
};
</script>

<style lang="scss" scoped>
.tabs-pane {
  &.active {
    background: red;
  }
}
</style>