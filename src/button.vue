<template>
  <button
    class="j-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <j-icon class="icon loading" name="loading" v-if="loading"></j-icon>
    <j-icon class="icon" :name="icon" v-if="icon && !loading"></j-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import JIcon from "./icon.vue";
export default {
  components: {
    JIcon: JIcon,
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
.j-button {
  $border-radius: 4px;
  $button-height: 32px;
  $fontsize: 14px;
  $button-bg: white;
  $button-active-bg: #eee;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #555;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: $fontsize;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
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