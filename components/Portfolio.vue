<template>
    <div id="portfolio" :class="'transition-colors duration-300 lg:pl-2' + (darkMode ? ' bg-gray-600' : ' bg-gray-50')">
        <div class="mx-6 md:mx-12 lg:mx-12 2xl:mx-20 pt-12 2xl:pt-24 col-span-5 pb-10 2xl:pb-24">
            <h1 :class="'text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black' + (darkMode ? ' text-white' : '')">Portafolio</h1>
            <p :class="'mt-6 2xl:mt-8 text-sm md:text-base lg:text-lg 2xl:text-xl font-light text-justify' + (darkMode ? ' text-gray-100' : ' text-gray-600')">En esta sección podrás encontrar los proyectos que he desarrollado para demostrar mis habilidades como desarrollador web.</p>
            <div class="mt-6 2xl:mt-12 cursor-grab">
                <swiper
                    :modules="swiperModules"
                    :slides-per-view="1"
                    :pagination="{ clickable: true }"
                    :breakpoints="{
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        '1280': {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }"
                >
                    <swiper-slide>
                        <img class="object-cover object-left rounded-md w-full h-56 xl:h-60 2xl:h-72" src="~/assets/img/portfolio/project-application-wizard.png" alt="Software - Imagen obtenida de Unsplash" />
                        <p :class="'mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl' + (darkMode ? ' text-white' : '')">Formularios de Aplicación</p>
                        <p :class="'font-light text-sm md:text-base lg:text-base 2xl:text-lg text-justify' + (darkMode ? ' text-gray-100' : ' text-gray-600')">
                            Desarrollada con Next.js. <br>
                            Tailwind CSS y Jest.
                        </p>
                        <div class="mt-4 space-x-6 mb-12">
                            <a target="_blank" href="https://application-wizard-ui.vercel.app/" :class="'inline-block transition-colors hover:opacity-70 transition-opacity duration-300 text-3xl xl:text-4xl' + (darkMode ? ' text-white' : '')">
                                <font-awesome-icon :icon="['fas', 'cloud']" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/application-wizard-ui" :class="'inline-block transition-colors hover:opacity-70 transition-opacity duration-300 text-3xl xl:text-4xl' + (darkMode ? ' text-white' : '')">
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="object-cover object-left rounded-md w-full h-56 xl:h-60 2xl:h-72" src="~/assets/img/portfolio/project-1.png" alt="Recorte del proyecto Portafolio Personal" />
                        <p :class="'mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl' + (darkMode ? ' text-white' : '')">Portafolio Personal</p>
                        <p :class="'font-light text-sm md:text-base lg:text-base 2xl:text-lg text-justify' + (darkMode ? ' text-gray-100' : ' text-gray-600')">
                            Desarrollado con Nuxt 3. <br>
                            Es la página que estás viendo ahora mismo.
                        </p>
                        <div class="mt-4 space-x-6 mb-12">
                            <a target="_blank" href="https://github.com/romariosc15/portfolio-ui" :class="'inline-block transition-colors hover:opacity-70 transition-opacity duration-300 text-3xl xl:text-4xl' + (darkMode ? ' text-white' : '')">
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="object-cover object-left rounded-md w-full h-56 xl:h-60 2xl:h-72" src="~/assets/img/portfolio/project-2.png" alt="Recorte del proyecto de Tienda Virtual" />
                        <p :class="'mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl' + (darkMode ? ' text-white' : '')">Tienda Virtual</p>
                        <p :class="'font-light text-sm md:text-base lg:text-base 2xl:text-lg text-justify' + (darkMode ? ' text-gray-100' : ' text-gray-600')">
                            Desarrollada con React, Redux y Chakra UI. <br>
                            Imágenes obtenidas de Unsplash.
                        </p>
                        <div class="mt-4 space-x-6 mb-12">
                            <a target="_blank" href="https://store-ui-beta.vercel.app/" :class="'inline-block transition-colors hover:opacity-70 transition-opacity duration-300 text-3xl xl:text-4xl' + (darkMode ? ' text-white' : '')">
                                <font-awesome-icon :icon="['fas', 'cloud']" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-ui" :class="'inline-block transition-colors hover:opacity-70 transition-opacity duration-300 text-3xl xl:text-4xl' + (darkMode ? ' text-white' : '')">
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="object-cover rounded-md w-full h-56 xl:h-60 2xl:h-72" src="~/assets/img/portfolio/project-3.jpg" alt="Node JS - Imagen obtenida de Pexels" />
                        <p :class="'mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl' + (darkMode ? ' text-white' : '')">Tienda Virtual API</p>
                        <p :class="'font-light text-sm md:text-base lg:text-base 2xl:text-lg text-justify' + (darkMode ? ' text-gray-100' : ' text-gray-600')">
                            Desarrollada con Node.js y Express.<br>
                            Integrada con el proyecto "Tienda virtual".
                        </p>
                        <div class="mt-4 space-x-6 mb-12">
                            <a target="_blank" href="https://store-api-beta.herokuapp.com/" :class="'inline-block transition-colors hover:opacity-70 transition-opacity duration-300 text-3xl xl:text-4xl' + (darkMode ? ' text-white' : '')">
                                <font-awesome-icon :icon="['fas', 'cloud']" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-api" :class="'inline-block transition-colors hover:opacity-70 transition-opacity duration-300 text-3xl xl:text-4xl' + (darkMode ? ' text-white' : '')">
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                            <a target="_blank" href="https://documenter.getpostman.com/view/5319131/UzJFwyje" :class="'inline-block transition-colors hover:opacity-70 transition-opacity duration-300 text-3xl xl:text-4xl' + (darkMode ? ' text-white' : '')">
                                <font-awesome-icon :icon="['fas', 'book']" />
                            </a>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        swiperModules: Object
    },
    setup() {
        const darkMode = useDarkMode();
        return {
            darkMode
        }
    }
}
</script>