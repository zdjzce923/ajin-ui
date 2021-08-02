<template>
  <div
    class="tabs-item"
    @click="selectedTab"
    :class="classes"
    :data-name="name"
  >
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
    classes() {
      return {
        active: this.active,
        disabled: this.disabled,
      };
    },
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", (name) => {
        this.active = name === this.name;
      });
    }
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
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit("click", this);
      this.active = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-item {
  $disabled-text-color: grey;
  $green: #3faf7c;
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $green;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>