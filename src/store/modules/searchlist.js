import {
  reqSearchList
} from '@/api'
const state = {
  searchlist: []
}
const mutations = {
  RECEIVE_REQ_SEARCH_LIST(state, searchlist) {
    state.searchlist = searchlist
  }
}
const actions = {
  async getsearchlist({
    commit
  },searchObj) {
    const result = await reqSearchList(searchObj)
    const {
      code,
      data
    } = result
    if (code === "200") {
      commit('RECEIVE_REQ_SEARCH_LIST', data)
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