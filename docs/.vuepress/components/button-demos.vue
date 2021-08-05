<template>
  <div class="button-wrapper">
    <j-button>默认按钮</j-button>
    <j-button icon="setting">默认按钮</j-button>
    <j-button icon="setting" icon-position="right">默认按钮</j-button>
    <j-button :loading="true">默认按钮</j-button>
    <j-button disabled>默认按钮</j-button>
  </div>
</template>

<script>
import Button from "../../../src/button";

export default {
  components: {
    "j-button": Button,
  },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  padding: 0 10px;
}
</style>