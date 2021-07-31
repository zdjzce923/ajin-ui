<template>
  <div class="tabs-head">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AjinTabsHead",
  inject: ["eventBus"],
};
</script>

<style lang="scss" scoped>
</style>