import { createApp } from 'vue'
import App from './App.vue'

/* Primevue */
import Primevue from 'primevue/config'
import Card from 'primevue/card'
import Button from 'primevue/button'

import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'

createApp(App)
    .use(Primevue)
    .component('Card', Card)
    .component('Button', Button)
    .mount('#app')
