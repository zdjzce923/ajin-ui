<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    selected: {
      type: String || Number,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "AjinTabsHead") {
        vm.$children.forEach((childVm) => {
          if (
            childVm.$options.name === "AjinTabsItem" &&
            childVm.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, childVm);
          }
        });
      }
    });
  },
  name: "AjinTabs",
};
</script>

<style lang="scss" scoped>
</style>