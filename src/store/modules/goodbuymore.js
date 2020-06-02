import {
  reqGoodBuyMore
} from '@/api'
const state = {
  goodbuymore: {}
}
const mutations = {
  RECEIVE_REQ_GOODBUYMORE(state, goodbuymore) {
    state.goodbuymore = goodbuymore
  }
}
const actions = {
  async getGoodBuyMore({
    commit
  }, {
    page,
    size
  }) {
    const result = await reqGoodBuyMore(page, size)
    const {
      code,
      data
    } = result
    if (code === "200") {
      commit('RECEIVE_REQ_GOODBUYMORE', data)
    } else {
      console.log(result.message);
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