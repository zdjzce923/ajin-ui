<template>
  <div class="tabs-item" @click="selectedTab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AjinTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  inject: ["eventBus"],
  methods: {
    selectedTab() {
      this.eventBus.$emit("update:selected", this.name);
      console.log(this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>