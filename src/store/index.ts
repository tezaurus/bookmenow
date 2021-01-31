import Vue from 'vue'
import Vuex from 'vuex'
import hotel from '@/store/modules/hotel'
import booking from '@/store/modules/booking'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hotel,
    booking
  }
})
