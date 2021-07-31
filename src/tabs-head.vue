<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="options">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AjinTabsHead",
  inject: ["eventBus"],
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>