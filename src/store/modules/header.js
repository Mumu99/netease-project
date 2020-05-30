import {
  reqNavList
} from '@/api'
const state = {
  navList: []
}
const mutations = {
  RECEIVE_REQ_NAV_LIST(state, navList) {
    state.navList = navList
  }
}
const actions = {
  async getNavList({
    commit
  }) {
    const result = await reqNavList()
    const {
      code,
      data
    } = result
    if (code === 200) {
      commit('RECEIVE_REQ_NAV_LIST', data)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}