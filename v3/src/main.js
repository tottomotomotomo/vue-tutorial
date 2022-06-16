import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/fluent-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import Calendar from 'primevue/calendar';
import Knob from "primevue/knob";


const app = createApp(App)

app.use(router).mount('#app')
app.use(PrimeVue)
app.component('Calendar',Calendar)
app.component('Knob', Knob)