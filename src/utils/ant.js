import {
  Button,
  Card,
} from "ant-design-vue";

const ant = {
  install(Vue) {
    Vue.component(Card.name, Card);
    Vue.component(Button.name, Button);
  },
};
export default ant;