<template>
  <div class="align-wrapper">
    <j-row class="row" align="left">
      <j-col class="item" span="8">left</j-col>
      <j-col class="item" span="8">left</j-col>
    </j-row>
    <j-row class="row" align="center">
      <j-col class="item" span="8">center</j-col>
      <j-col class="item" span="8">center</j-col>
    </j-row>
    <j-row class="row" align="right">
      <j-col class="item" span="8">right</j-col>
      <j-col class="item" span="8">right</j-col>
    </j-row>
  </div>
</template>

<script>
import Col from "../../../src/col";
import Row from "../../../src/row";

export default {
  components: {
    "j-col": Col,
    "j-row": Row,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/helper";
.align-wrapper {
  text-align: center;
  color: $font-color;
  .row {
    padding-top: $wrapper-top;
    > .item {
      text-align: center;
      &:nth-child(odd) {
        background: $background;
      }
      &:nth-child(even) {
        background: lighten($background, 20%);
        color: $font-color;
      }
    }
  }
}
</style>