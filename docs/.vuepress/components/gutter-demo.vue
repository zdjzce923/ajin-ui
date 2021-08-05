<template>
  <div class="gutter-wrapper">
    <j-row gutter="30">
      <j-col class="item" span="8"> <span> col-8; gutter-30;</span> </j-col>
      <j-col class="item" span="8"> <span> col-8; gutter-30;</span> </j-col>
      <j-col class="item" span="8"> <span> col-8; gutter-30;</span> </j-col>
    </j-row>
    <j-row gutter="20">
      <j-col class="item" span="8"> <span> col-8; gutter-20;</span> </j-col>
      <j-col class="item" span="8"> <span> col-8; gutter-20;</span> </j-col>
      <j-col class="item" span="8"> <span> col-8; gutter-20;</span> </j-col>
    </j-row>
    <j-row gutter="10">
      <j-col class="item" span="8"> <span> col-8; gutter-10;</span> </j-col>
      <j-col class="item" span="8"> <span> col-8; gutter-10;</span> </j-col>
      <j-col class="item" span="8"> <span> col-8; gutter-10;</span> </j-col>
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

.gutter-wrapper {
  padding-top: $wrapper-top;
  .item {
    text-align: center;
    color: $font-color;
    > span {
      display: block;
      background: $background;
    }
  }
}
</style>