import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

 const state = {
	count:1,
	other_count:2
}
 
export default new Vuex.Store({
    state,
    actions,
    mutations
});
