import './assets/base.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from "./includes/validation"
import { auth } from "./includes/firebase"
import Icon from "./directives/icon.js"
import i18n from "./includes/i18n"

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        const app = createApp(App)

        /* Registering pligins */
        app.use(createPinia())
        app.use(router)
        app.use(VeeValidatePlugin)
        app.directive('icon', Icon)
        app.use(i18n)

        app.mount('#app')
    }
})