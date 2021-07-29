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

Vue.component('j-button', Button)
Vue.component('j-button-group', ButtonGroup)
Vue.component('j-input', JInput)
Vue.component('j-row', Row)
Vue.component('j-col', Col)

Vue.component('j-layout', LayOut)
Vue.component('j-content', Content)
Vue.component('j-header', Header)
Vue.component('j-footer', Footer)
Vue.component('j-sider', Sider)

new Vue({
  el: '#app',
  data: { loading1: true, loading2: false, loading3: false, message: '1' },
})
import chai from 'chai'
const expect = chai.expect
import spies from 'chai-spies'
chai.use(spies)
