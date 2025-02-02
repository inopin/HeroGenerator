import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import Button from "primevue/button"

const app = createApp(App);
app.component('Button', Button);
app.use(PrimeVue, { theme: {
    preset: Aura
}});
app.mount('#app');


