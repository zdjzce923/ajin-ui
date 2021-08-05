<template>
  <div>
    <j-layout style="color: white">
      <j-header style="height: 50px; background: #81d2ad"> header </j-header>
      <j-content style="height: 100px; background: #3faf7c">
        content
      </j-content>
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

<style lang="scss" scoped>
@import "../styles/helper";

.wrapper {
  > .layout-wrapper {
    height: 30vh;
    > .header-wrapper {
      height: 3em;
      background: $background;
    }
    > .content-wrapper {
      background: lighten($background, 40%);
    }
    > .layout-wrapper {
      height: 6em;
      > .sider-wrapper {
        width: 3em;
        background: lighten($background, 15%);
      }
      > .content-wrapper {
        background: lighten($background, 40%);
      }
      > .layout-wrapper {
        > .content-wrapper {
          background: lighten($background, 40%);
        }
        > .footer-wrapper {
          background: $background;
        }
      }
    }
    > .footer-wrapper {
      background: $background;
    }
  }
}
</style>