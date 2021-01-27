import { createApp } from "vue"
import App from "./App.vue"
import Ant from "./utils/ant"
import store from "./store/store.js"
import components from "./components/components"


const app = createApp(App)

app.use(Ant)
app.use(store)
app.use(components)
app.mount('#app')
