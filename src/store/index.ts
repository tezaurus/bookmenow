import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/modules/app'
import hotel from '@/store/modules/hotel'
import booking from '@/store/modules/booking'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    hotel,
    booking
  }
})
