<template>
  <div class="input-wrapper">
    <j-input></j-input>
    <j-input disabled></j-input>
    <j-input readonly></j-input>
    <j-input error="错误信息"></j-input>
    <br />
  </div>
</template>

<script>
import Input from "../../../src/input";

export default {
  data() {
    return { xxx: "双向绑定" };
  },
  components: { "j-input": Input },
};
</script>

<style lang="scss" scoped>
@import "../styles/helper";

.input-wrapper {
  padding-top: $wrapper-top;
}
</style>