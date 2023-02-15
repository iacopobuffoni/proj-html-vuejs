import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone, faAngleDown, faArrowRight, faArrowUpRightDots, faPeopleGroup, faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faPhone, faAngleDown, faArrowRight, faArrowUpRightDots, faPeopleGroup, faChartPie, faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn, faTiktok, faCopyright)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
