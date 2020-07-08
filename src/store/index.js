import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import UserDetails from "./modules/user_details";

export default new Vuex.Store({
  modules: {
    UserDetails,
  }
})
