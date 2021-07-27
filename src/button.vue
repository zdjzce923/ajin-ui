<template>
  <button
    class="g-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <g-icon class="icon loading" name="loading" v-if="loading"></g-icon>
    <g-icon class="icon" :name="icon" v-if="icon && !loading"></g-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import GIcon from "./icon.vue";
export default {
  components: {
    GIcon: GIcon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>

<style lang='scss'>
.g-button {
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading {
    animation: load 1.5s infinite linear;
  }
}
</style>