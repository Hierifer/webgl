import { createStore } from "vuex"
import modules from './modules'

const store = createStore({
  state: {
    name: "Vue"
  },
  modules,
})

export default store