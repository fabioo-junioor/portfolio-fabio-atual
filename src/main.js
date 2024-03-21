import { createApp } from 'vue'
import App from './App.vue'

/* Primevue */
import Primevue from 'primevue/config'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Avatar from 'primevue/avatar'

import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'

/* BootstrapVue */
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


createApp(App)
    .use(Primevue)
    .use(BootstrapVue)
    .component('Card', Card)
    .component('Button', Button)
    .component('Menubar', Menubar)
    .component('Avatar', Avatar)
    .mount('#app')
