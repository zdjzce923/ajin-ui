import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import JInput from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import LayOut from './layout.vue'
import Content from './content.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

Vue.component('j-button', Button)
Vue.component('j-button-group', ButtonGroup)
Vue.component('j-input', JInput)
Vue.component('j-row', Row)
Vue.component('j-col', Col)
Vue.component('j-icon', Icon)

Vue.component('j-tabs', Tabs)
Vue.component('j-tabs-head', TabsHead)
Vue.component('j-tabs-body', TabsBody)
Vue.component('j-tabs-item', TabsItem)
Vue.component('j-tabs-pane', TabsPane)

Vue.component('j-layout', LayOut)
Vue.component('j-content', Content)
Vue.component('j-header', Header)
Vue.component('j-footer', Footer)
Vue.component('j-sider', Sider)
Vue.use(plugin)

new Vue({
  el: '#app',
  data() {
    return {
      selectedName: 'tabs2',
    }
  },
  methods: {},
})
