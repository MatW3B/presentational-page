import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Style files
import 'quasar/src/css/index.sass'
import './assets/sass/main.sass'

const app = createApp(App)

app.use(router)
app.use(Quasar, {
    plugins: {},
})

app.mount('#app')
