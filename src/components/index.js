import Vue from 'vue'
import TopBar from './HelloWorld.vue'
import Head from './head.vue'
import Line from './line.vue'
const Components = {
  TopBar,
  Head,
  Line
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
