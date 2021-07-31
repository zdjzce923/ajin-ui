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
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
  },
  methods: {
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
        position: 'bottom',
        position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback() {
            console.log('他说已经充值智商了')
          },
        },
        autoClose: 2,
      })
    },
  },
})
