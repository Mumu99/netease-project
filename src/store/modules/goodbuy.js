import {
  reqGoodBuy
} from '@/api'
const state = {
  goodbuy: {}
}
const mutations = {
  RECEIVE_REQ_GOODBUY(state, goodbuy) {
    state.goodbuy = goodbuy
  }
}
const actions = {
  async getGoodBuy({
    commit
  }) {
    const result = await reqGoodBuy()
    const {
      code,
      data
    } = result
    if (code === "200") {
      commit('RECEIVE_REQ_GOODBUY', data)
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