const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist
  })
  it('接收 gutter 属性', done => {
    Vue.component('j-row', Row)
    Vue.component('j-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <j-row gutter="20">
        <j-col span="12"></j-col>
        <j-col span="12"></j-col>
      </j-row>
      `
    const vm = new Vue({
      el: div,
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right',
      },
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
    div.remove()
    vm.$destroy()
  })
})
