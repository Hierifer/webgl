
const GENERAL_STATE = {
  INIT: 'init',
  RUNNING: 'running',
  PAUSE: 'pause',
  CLOSE: 'close',
}

const controller = {
  namespace: true,

  state: {
    mainStates: {
      general: GENERAL_STATE.RUNNING,
    },
    gui: {
      logger: {
        visiable: true
      },
      profiler: {
        visiable: true
      },
      mainController: {
        visiable: true
      }
    }
  },
  getters: {
    GL_RUNNING(state){
      return state.mainStates.general === GENERAL_STATE.RUNNING || state.mainStates.general === GENERAL_STATE.PAUSE
    },
    GL_PAUSED(state){
      return state.mainStates.general === GENERAL_STATE.PAUSE
    },
  },
  mutations: {
    SET_STATE_RUNNING(_state, payload) {
      if(payload){
        _state.mainStates.general = payload
      }
    }
  },
  actions: {
    resumeStopGameStatus({state, commit}){
      const WHOLE_CHANGEBLE = [GENERAL_STATE.RUNNING, GENERAL_STATE.PAUSE]
      const general = state.mainStates.general

      if(WHOLE_CHANGEBLE.includes(general)){
        if(general === 'running'){
          commit('SET_STATE_RUNNING', GENERAL_STATE.PAUSE)
        } else {
          commit('SET_STATE_RUNNING', GENERAL_STATE.RUNNING)
        }
      } else {
        throw(new Error(JSON.stringify({'code': 10001, 'msg': `【系统】resumeStopGameStatus 改变不能改变的主状态 ${general}`})))
      }
    },
    endGame({state, commit}){
      const WHOLE_CHANGEBLE = [GENERAL_STATE.RUNNING, GENERAL_STATE.PAUSE, GENERAL_STATE.INIT]
      const general = state.mainStates.general

      if(WHOLE_CHANGEBLE.includes(general)){
        commit('SET_STATE_RUNNING', GENERAL_STATE.CLOSE)
      } else {
        throw(new Error(JSON.stringify({'code': 10002, 'msg': `【系统】endGame 改变不能改变的主状态 ${general}`})))
      }
    },
  }
}

export default controller;