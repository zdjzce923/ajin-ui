<template>
  <div class="popover-wrapper">
    <j-popover position="bottom">
      <template slot="content"> popover 中的内容 </template>
      <j-button>下方显示内容</j-button>
    </j-popover>
    <j-popover>
      <template slot="content"> popover 中的内容 </template>
      <j-button>点击显示</j-button>
    </j-popover>
    <j-popover trigger="hover">
      <template slot="content"> popover 中的内容 </template>
      <j-button>hover 显示内容</j-button>
    </j-popover>
  </div>
</template>

<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button";

export default {
  components: {
    "j-popover": Popover,
    "j-button": Button,
  },
};
</script>

<style lang="scss" scoped>
</style>