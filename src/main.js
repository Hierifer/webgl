import { createApp } from "vue"
import App from "./App.vue"
import Ant from "./utils/ant"
import store from "./store/store.js"


const app = createApp(App)

app.use(Ant)
app.use(store)

app.mount('#app')
