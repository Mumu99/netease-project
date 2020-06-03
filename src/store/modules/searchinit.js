import {
  reqSearchInit
} from '@/api'
const state = {
  search: {}
}
const mutations = {
  RECEIVE_REQ_SEARCH(state, search) {
    state.search = search
  }
}
const actions = {
  async getsearchinit({
    commit
  }) {
    const result = await reqSearchInit()
    const {
      code,
      data
    } = result
    if (code === "200") {
      commit('RECEIVE_REQ_SEARCH', data)
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