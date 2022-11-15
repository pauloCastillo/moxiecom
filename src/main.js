import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

/* Third parties */
import {library} from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
    faCartShopping, 
    faUserCircle,
    faArrowCircleRight,
    faArrowCircleLeft,
    faArrowCircleUp,
    faArrowCircleDown,
    faSearch
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
    faUserCircle,
    faCartShopping,
    faArrowCircleRight,
    faArrowCircleLeft,
    faArrowCircleUp,
    faArrowCircleDown,
    faSearch,
    faFacebook, 
    faInstagram, 
    faWhatsapp
)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
