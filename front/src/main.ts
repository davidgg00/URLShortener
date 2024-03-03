import { createApp } from 'vue'
import App from './App.vue'
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import 'animate.css';

createApp(App)
    .use(Particles, {
        init: async (engine) => {
            await loadSlim(engine);
        },
    })
    .mount('#app')
