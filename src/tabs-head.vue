<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AjinTabsHead",
  inject: ["eventBus"],
  mounted() {
    if (this.$children.length === 0) {
      console &&
        console.warn &&
        console.warn("tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件");
    }
    this.eventBus.$on("update:selected", (item, vm) => {
      let { width, left } = vm.$el.getBoundingClientRect();
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    });
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: #3faf7c;
$border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  position: relative;
  left: 0;
  justify-content: flex-start;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>