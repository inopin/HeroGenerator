import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import { worker } from './shared/api/mocks/browser'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
})
app.mount('#app')
if (process.env.NODE_ENV === 'development') {
    worker.start()
}
