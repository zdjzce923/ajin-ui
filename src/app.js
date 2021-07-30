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
Vue.use(plugin)

new Vue({
  el: '#app',
  data: { message: 'hi' },
  created() {
    this.$toast('你的智商需要充值！', {
      position: 'middle',
      enableHtml: false,
      closeButton: {
        text: '已充值',
        callback() {
          console.log('他说已经充值智商了')
        },
      },
      autoClose: false,
      autoCloseDelay: 3,
    })
  },
})
import chai from 'chai'
const expect = chai.expect
import spies from 'chai-spies'
chai.use(spies)
