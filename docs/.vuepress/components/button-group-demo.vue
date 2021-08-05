<template>
  <div class="group-wrapper">
    <j-button-group>
      <j-button>默认按钮</j-button>
      <j-button>默认按钮</j-button>
      <j-button>默认按钮</j-button>
    </j-button-group>
  </div>
</template>

<script>
import ButtonGroup from "../../../src/button-group.vue";
import Button from "../../../src/button.vue";
export default {
  components: {
    "j-button": Button,
    "j-button-group": ButtonGroup,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/helper";
.group-wrapper {
  padding-top: $wrapper-top;
}
</style>