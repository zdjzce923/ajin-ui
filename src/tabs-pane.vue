<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AjinTabsPane",
  inject: ["eventBus"],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.eventBus.$on("update:selected", (name) => {
      if (name === this.name) {
        console.log(`点击了item 我是 ${this.name}`);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
</style>