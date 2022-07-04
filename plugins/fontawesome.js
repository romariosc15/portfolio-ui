import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faUser, faFolder, faPhone, faCloud, faBars, faMoon, faFileArrowDown, faBook } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(faHouse, faUser, faFolder, faPhone, faCloud, faBars, faMoon, faFileArrowDown, faLinkedin, faGithub, faBook);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
})