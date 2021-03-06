import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import { Auth } from 'aws-amplify'

export const state = () => ({
  isAuthenticated: false,
  user: null,
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  user: (state) => state.user,
})

export const mutations = mutationTree(state, {
  set(state, user) {
    state.isAuthenticated = !!user // userがnullじゃないときauthされた
    state.user = user
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async load({ commit }) {
      try {
        const user = await Auth.currentAuthenticatedUser()
        commit('set', user)
        return user
      } catch (error) {
        commit('set', null)
      }
    },
    async register(_, { email, password }) {
      const user = await Auth.signUp({
        username: email,
        password,
      })
      return user
    },
    async confirmRegistration(_, { email, code }) {
      return await Auth.confirmSignUp(email, code)
    },
    async login({ commit }, { email, password }) {
      const user = await Auth.signIn(email, password)
      commit('set', user)
      return user
    },
    async logout({ commit }) {
      await Auth.signOut()
      commit('set', null)
    },
  }
)
