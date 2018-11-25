import Vue from 'nativescript-vue'
import Reddit from './components/Reddit'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  render: h => h('frame', [h(Reddit)])
}).$start()
