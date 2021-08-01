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
      return { active: this.active, disabled: this.disabled };
    },
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String || Number,
      required: true,
    },
  },
  inject: ["eventBus"],
  methods: {
    selectedTab() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("update:selected", this.name, this);
      this.active = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-item {
  $disabled-text-color: grey;
  $blue: blue;
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
  }
}
</style>