import { reqSearchHot } from "@/api";
const state = {
  search: [],
};
const mutations = {
  RECEIVE_REQ_SEARCH(state, search) {
    state.search = search;
  },
};
const actions = {
  async getSearchHot({ commit }, searchObj) {
    const result = await reqSearchHot(searchObj);
    const { code, data } = result;
    if (code === "200") {
      commit("RECEIVE_REQ_SEARCH", data);
      console.log(this.state.searchHot.search);
    }
  },
};
const getters = {
};
export default {
  state,
  mutations,
  actions,
  getters,
};
