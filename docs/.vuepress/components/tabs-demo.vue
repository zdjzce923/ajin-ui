<template>
  <div>
    <j-tabs :selected.sync="selectedTab">
      <j-tabs-head>
        <j-tabs-item name="tab1">
          <j-icon name="setting"></j-icon>
          Tab1
        </j-tabs-item>
        <j-tabs-item name="tab2">Tab2</j-tabs-item>
        <j-tabs-item name="tab3">Tab3</j-tabs-item>
        <j-tabs-item name="tab4" disabled>Tab4</j-tabs-item>
      </j-tabs-head>
      <j-tabs-body>
        <j-tabs-pane name="tab1">内容1</j-tabs-pane>
        <j-tabs-pane name="tab2">内容2</j-tabs-pane>
        <j-tabs-pane name="tab3">内容3</j-tabs-pane>
        <j-tabs-pane name="tab4">内容4</j-tabs-pane>
      </j-tabs-body>
    </j-tabs>
  </div>
</template>

<script>
import Tabs from "../../../src/tabs";
import TabsBody from "../../../src/tabs-body";
import TabsHead from "../../../src/tabs-head";
import TabsItem from "../../../src/tabs-item";
import TabsPane from "../../../src/tabs-pane";
import Icon from "../../../src/icon";

export default {
  components: {
    "j-tabs": Tabs,
    "j-tabs-head": TabsHead,
    "j-tabs-body": TabsBody,
    "j-tabs-item": TabsItem,
    "j-tabs-pane": TabsPane,
    "j-icon": Icon,
  },
  data() {
    return { selectedTab: "tab1" };
  },
};
</script>

<style lang="scss" scoped>
</style>