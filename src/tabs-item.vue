<template>
  <div class="tabs-item" @click="selectedTab" :class="classesActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AjinTabsItem",
  data() {
    return {
      active: false,
    };
  },
  computed: {
    classesActive() {
      this.eventBus.$on("update:selected", (name) => {
        this.active = name === this.name;
      });
      return { active: this.active };
    },
  },
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
      this.active = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  &.active {
    background: red;
  }
}
</style>