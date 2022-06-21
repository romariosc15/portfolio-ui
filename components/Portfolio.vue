<template>
    <div id="portfolio" :class="'transition-colors duration-300' + (darkMode ? ' bg-gray-600' : ' bg-gray-50')">
        <div class="mx-6 md:mx-12 lg:mx-12 2xl:mx-20 pt-12 2xl:pt-24 col-span-5 pb-10 2xl:pb-24">
            <h1 :class="'text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black' + (darkMode ? ' text-white' : '')">Portafolio</h1>
            <p :class="'mt-6 2xl:mt-8 text-sm md:text-base lg:text-lg 2xl:text-xl font-light text-justify' + (darkMode ? ' text-gray-100' : ' text-gray-600')">En esta sección podrás encontrar los proyectos que he desarrollado para demostrar mis habilidades como desarrollador web.</p>
            <div class="mt-6 2xl:mt-12">
                <swiper
                    :modules="swiperModules"
                    :slides-per-view="1"
                    :space-between="50"
                    :pagination="{ clickable: true }"
                    :breakpoints="{
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        '1280': {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }"
                >
                    <swiper-slide>
                        <img class="h-fit-content rounded-md cursor-grab" src="~/assets/img/portfolio/project-1.jpg" />
                        <p :class="'mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl' + (darkMode ? ' text-white' : '')">Tienda virtual</p>
                        <p :class="'font-light text-sm md:text-base lg:text-base 2xl:text-lg' + (darkMode ? ' text-gray-100' : ' text-gray-600')">Desarrollado con React y Redux.</p>
                        <div class="mt-4 space-x-4 mb-12">
                            <a target="_blank" href="https://store.romariosarmiento.com" :class="'inline-block transition-colors duration-400 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' + (darkMode ? ' text-white hover:text-gray-300' : ' hover:text-gray-600')">
                                <font-awesome-icon :icon="['fas', 'cloud']" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-ui" :class="'inline-block transition-colors duration-400 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' + (darkMode ? ' text-white hover:text-gray-300' : ' hover:text-gray-600')">
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="h-fit-content rounded-md cursor-grab" src="~/assets/img/portfolio/project-2.jpg" />
                        <p :class="'mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl' + (darkMode ? ' text-white' : '')">API REST</p>
                        <p :class="'font-light text-sm md:text-base lg:text-base 2xl:text-lg' + (darkMode ? ' text-gray-100' : ' text-gray-600')">Desarrollada con Node.js.</p>
                        <div class="mt-4 space-x-4 mb-12">
                            <a target="_blank" href="https://store-api.romariosarmiento.com" :class="'inline-block transition-colors duration-400 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' + (darkMode ? ' text-white hover:text-gray-300' : ' hover:text-gray-600')">
                                <font-awesome-icon :icon="['fas', 'cloud']" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-api" :class="'inline-block transition-colors duration-400 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' + (darkMode ? ' text-white hover:text-gray-300' : ' hover:text-gray-600')">
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="h-fit-content rounded-md cursor-grab" src="~/assets/img/portfolio/project-3.jpg" />
                        <p :class="'mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl' + (darkMode ? ' text-white' : '')">TEST 3</p>
                        <p :class="'font-light text-sm md:text-base lg:text-base 2xl:text-lg' + (darkMode ? ' text-gray-100' : ' text-gray-600')">Desarrollada con Node.js.</p>
                        <div class="mt-4 space-x-4 mb-12">
                            <a target="_blank" href="https://store-api.romariosarmiento.com" :class="'inline-block transition-colors duration-400 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' + (darkMode ? ' text-white hover:text-gray-300' : ' hover:text-gray-600')">
                                <font-awesome-icon :icon="['fas', 'cloud']" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-api" :class="'inline-block transition-colors duration-400 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' + (darkMode ? ' text-white hover:text-gray-300' : ' hover:text-gray-600')">
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="h-fit-content rounded-md cursor-grab" src="~/assets/img/portfolio/project-4.jpg" />
                        <p :class="'mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl' + (darkMode ? ' text-white' : '')">TEST 4</p>
                        <p :class="'font-light text-sm md:text-base lg:text-base 2xl:text-lg' + (darkMode ? ' text-gray-100' : ' text-gray-600')">Desarrollada con Node.js.</p>
                        <div class="mt-4 space-x-4 mb-12">
                            <a target="_blank" href="https://store-api.romariosarmiento.com" :class="'inline-block transition-colors duration-400 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' + (darkMode ? ' text-white hover:text-gray-300' : ' hover:text-gray-600')">
                                <font-awesome-icon :icon="['fas', 'cloud']" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-api" :class="'inline-block transition-colors duration-400 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' + (darkMode ? ' text-white hover:text-gray-300' : ' hover:text-gray-600')">
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="h-fit-content rounded-md cursor-grab" src="~/assets/img/portfolio/project-5.jpg" />
                        <p :class="'mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl' + (darkMode ? ' text-white' : '')">TEST 5</p>
                        <p :class="'font-light text-sm md:text-base lg:text-base 2xl:text-lg' + (darkMode ? ' text-gray-100' : ' text-gray-600')">Desarrollada con Node.js.</p>
                        <div class="mt-4 space-x-4 mb-12">
                            <a target="_blank" href="https://store-api.romariosarmiento.com" :class="'inline-block transition-colors duration-400 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' + (darkMode ? ' text-white hover:text-gray-300' : ' hover:text-gray-600')">
                                <font-awesome-icon :icon="['fas', 'cloud']" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-api" :class="'inline-block transition-colors duration-400 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' + (darkMode ? ' text-white hover:text-gray-300' : ' hover:text-gray-600')">
                                <font-awesome-icon :icon="['fab', 'github']" />
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