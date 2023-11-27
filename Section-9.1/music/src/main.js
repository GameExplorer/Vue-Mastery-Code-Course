import './assets/base.css'
import './assets/main.css'
import 'nprogress/nprogress.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from "./includes/validation"
import { auth } from "./includes/firebase"
import Icon from "./directives/icon.js"
import i18n from "./includes/i18n"
import { registerSW } from 'virtual:pwa-register'
import GlobalComponents from './includes/_global'
import progressBar from './includes/progress-bar'   

registerSW({ immediate: true });

progressBar(router);

let app

auth.onAuthStateChanged(() => {
    if (!app) {
        const app = createApp(App)

        /* Registering pligins */
        app.use(createPinia())
        app.use(router)
        app.use(VeeValidatePlugin)
        app.use(i18n)
        app.use(GlobalComponents)
        app.directive('icon', Icon)
        
        app.mount('#app')
    }
})