<template>
  <div class="grid-wrapper">
    <j-row class="row">
      <j-col class="item" span="24">col-24</j-col>
    </j-row>
    <j-row>
      <j-col class="item" span="12">col-12</j-col>
      <j-col class="item" span="12">col-12</j-col>
    </j-row>
    <j-row class="row">
      <j-col class="item" span="8">col-8</j-col>
      <j-col class="item" span="8">col-8</j-col>
      <j-col class="item" span="8">col-8</j-col>
    </j-row>
    <j-row class="row">
      <j-col class="item" span="6">col-6</j-col>
      <j-col class="item" span="6">col-6</j-col>
      <j-col class="item" span="6">col-6</j-col>
      <j-col class="item" span="6">col-6</j-col>
    </j-row>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/helper";

.grid-wrapper {
  > .row {
    padding: 0.2em;
    > .item {
      text-align: center;
      color: $font-color;
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