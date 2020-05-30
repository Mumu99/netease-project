import {
  reqHome
} from '@/api'
const state = {
  homeList: []
}
const mutations = {
  RECEIVE_REQ_HOME_LIST(state, homeList) {
    state.homeList = homeList
  }
}
const actions = {
  async getHomeist({
    commit
  }) {
    const result = await reqHome()
    const {
      code,
      data
    } = result
    if (code === 200) {
      commit('RECEIVE_REQ_HOME_LIST', data)
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