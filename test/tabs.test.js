const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('j-tabs', Tabs)
Vue.component('j-tabs-head', TabsHead)
Vue.component('j-tabs-body', TabsBody)
Vue.component('j-tabs-item', TabsItem)
Vue.component('j-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性', done => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <j-tabs selected="finance">
        <j-tabs-head>
          <j-tabs-item name="woman"> 美女 </j-tabs-item>
          <j-tabs-item name="finance"> 财经 </j-tabs-item>
          <j-tabs-item name="sports"> 体育 </j-tabs-item>
        </j-tabs-head>
        <j-tabs-body>
          <j-tabs-pane name="woman"> 美女相关资讯 </j-tabs-pane>
          <j-tabs-pane name="finance"> 财经相关资讯 </j-tabs-pane>
          <j-tabs-pane name="sports"> 体育相关资讯 </j-tabs-pane>
        </j-tabs-body>
      </j-tabs>
    `
    let vm = new Vue({
      el: div,
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })

  it('可以接受 direction prop', () => {})
})
