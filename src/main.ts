import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import prismic from './prismic'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Style files
import 'quasar/src/css/index.sass'
import './assets/sass/main.scss'

const app = createApp(App)
    .use(router)
    .use(Quasar, {
        plugins: {},
    })
    .use(prismic)

app.mount('#app')
