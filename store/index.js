export const state = () => ({
  members: [],
  message: 'lemoncode',
  error: '',
  oldSearch: '',
});

export const mutations = {
  setMembers(state, members) {
    state.members = members;
  },
  updateMessage(state, payload) {
    state.message = payload;
  },
  setError(state, error) {
    state.error = error;
  },
  setOldSearch(state, oldSearch) {
    state.oldSearch = oldSearch;
  },
};

export const actions = {
  async loadMembers({ commit }, organization) {
    commit('setError', '');
    commit('setOldSearch', organization);

    try {
      const { data } = await this.$axios.get(
        `https://api.github.com/orgs/${organization}/members`
      );
      commit('setMembers', data);
    } catch (error) {
      console.log(error);
      commit('setError', error);
    }
  },
};

export const getters = {
  getMembers(state) {
    return state.members;
  },
  getError(state) {
    return state.error;
  },
  getOldSearch(state) {
    return state.oldSearch;
  },
};
