<template>
  <div>
    <j-button @click="onClickButton2">会自动关闭</j-button>&nbsp;&nbsp;
    <j-button @click="onClickButton">点击按钮才关闭</j-button>&nbsp;&nbsp;
    <br />
    <j-button @click="top">上方弹出</j-button>
    <j-button @click="middle">中间弹出</j-button>
    <j-button @click="bottom">下方弹出</j-button>
  </div>
</template>

<script>
import Vue from "vue";
import Toast from "../../../src/toast";
import Button from "../../../src/button";
import plugin from "../../../src/plugin.js";

Vue.use(plugin);
export default {
  components: { "j-toast": Toast, "j-button": Button },
  methods: {
    onClickButton() {
      this.$toast(" toast 内容", {
        closeButton: {
          text: "关闭",
          callback: () => {
            console.log("关闭了");
          },
        },
      });
    },
    onClickButton2() {
      this.$toast(" toast 内容", {
        autoClose: 2,
        closeButton: {
          text: "关闭",
          callback: () => {
            console.log("关闭了");
          },
        },
      });
    },
    top() {
      this.$toast(" toast 内容", { position: "top", autoClose: 3 });
    },
    middle() {
      this.$toast(" toast 内容", { position: "middle", autoClose: 3 });
    },
    bottom() {
      this.$toast(" toast 内容", { position: "bottom", autoClose: 3 });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>