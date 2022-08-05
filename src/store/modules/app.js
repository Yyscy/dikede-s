
const state = {
  sidebar: {
    withoutAnimation: false
  },
  device: 'desktop'
}

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}

const actions = {

  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
