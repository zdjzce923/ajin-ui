<template>
  <div class="single-wrapper">
    <j-collapse :selected.sync="selected" single>
      <j-collapse-item title="标题1" name="1">1</j-collapse-item>
      <j-collapse-item title="标题2" name="2">2</j-collapse-item>
      <j-collapse-item title="标题3" name="3">3</j-collapse-item>
    </j-collapse>
  </div>
</template>

<script>
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";

export default {
  components: {
    "j-collapse": Collapse,
    "j-collapse-item": CollapseItem,
  },
  data() {
    return {
      selected: ["1"],
    };
  },
};
</script>

<style lang="scss" scoped>
.single-wrapper {
  padding: 10px 0;
}
</style>