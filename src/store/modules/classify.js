import {
  reqCateList
} from '@/api'
const state = {
  catelist: []
}
const mutations = {
  RECEIVE_REQ_CATE_LIST(state, catelist) {
    state.catelist = catelist
  }
}
const actions = {
  async getCateList({
    commit
  }) {
    const result = await reqCateList()
    const {
      code,
      data
    } = result
    if (code === 200) {
      commit('RECEIVE_REQ_CATE_LIST', data)
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