import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import GInput from './input.vue'
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', GInput)
new Vue({
  el: '#app',
  data: { loading1: true, loading2: false, loading3: false },
})
import chai from 'chai'
const expect = chai.expect
import spies from 'chai-spies'
chai.use(spies)
