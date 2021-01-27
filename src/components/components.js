import BasicGUIPanel from './BasicGUIPanel.vue'

const components = {
  install(Vue) {
    Vue.component(BasicGUIPanel.name, BasicGUIPanel);
  },
};
export default components;