import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faUser, faFolder, faPhone, faCloud, faBars, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(faHouse, faUser, faFolder, faPhone, faCloud, faBars, faMoon, faFileLines, faLinkedin, faGithub);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
})