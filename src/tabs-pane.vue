<template>
  <div class="tabs-pane" v-if="active" :class="classesActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AjinTabsPane",
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  props: {
    name: {
      type: String || Number,
      required: true,
    },
  },
  computed: {
    classesActive() {
      return {
        active: this.active,
      };
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },
};
</script>

<style lang="scss" scoped>
.tabs-pane {
  &.active {
    background: red;
  }
}
</style>