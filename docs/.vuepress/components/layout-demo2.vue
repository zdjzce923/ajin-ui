<template>
  <div>
    <j-layout style="color: white; overflow: hidden">
      <j-header style="height: 50px; background: #81d2ad"> header </j-header>
      <j-layout>
        <j-sider
          style="height: 100px; background: #66be9e; width: 200px; color: white"
        >
          sider
        </j-sider>
        <j-content style="height: 100px; background: #3faf7c">
          content
        </j-content>
      </j-layout>
      <j-footer style="height: 50px; background: #81d2ad"> footer </j-footer>
    </j-layout>
  </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Sider from "../../../src/sider";
import Content from "../../../src/content";
import Footer from "../../../src/footer";

export default {
  components: {
    "j-layout": Layout,
    "j-header": Header,
    "j-sider": Sider,
    "j-content": Content,
    "j-footer": Footer,
  },
};
</script>
