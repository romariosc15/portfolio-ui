<template>
    <div id="portfolio" class="bg-gray-50">
        <div class="mx-6 md:mx-12 lg:mx-12 2xl:mx-20 pt-12 2xl:pt-24 col-span-5 pb-10 2xl:pb-24">
            <h1 class="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black">Portafolio</h1>
            <p class="mt-6 2xl:mt-8 text-sm md:text-base lg:text-lg 2xl:text-xl font-light text-justify text-gray-600">En esta sección podrás encontrar los proyectos que he desarrollado para demostrar mis habilidades como desarrollador web.</p>
            <div class="mt-6 2xl:mt-12 cursor-grab">
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
                        <img class="h-fit-content rounded-md" src="~/assets/img/portfolio/project-1.jpg" />
                        <p class="mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl">Tienda virtual</p>
                        <p class="font-light text-sm md:text-base lg:text-base 2xl:text-lg text-gray-600">Desarrollado con React y Redux.</p>
                        <div class="mt-4 space-x-4 mb-12">
                            <a target="_blank" href="https://store.romariosarmiento.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/web.png" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-ui" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/social-medias/github.png" />
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="h-fit-content rounded-md" src="~/assets/img/portfolio/project-2.jpg" />
                        <p class="mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl">API REST</p>
                        <p class="font-light text-sm md:text-base lg:text-base 2xl:text-lg text-gray-600">Desarrollada con Node.js.</p>
                        <div class="mt-4 space-x-4 mb-12">
                            <a target="_blank" href="https://store-api.romariosarmiento.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/web.png" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-api" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/social-medias/github.png" />
                            </a>
                            <a target="_blank" href="https://www.postman.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/social-medias/postman.png" />
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="h-fit-content rounded-md" src="~/assets/img/portfolio/project-3.jpg" />
                        <p class="mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl">TEST 3</p>
                        <p class="font-light text-sm md:text-base lg:text-base 2xl:text-lg text-gray-600">Desarrollada con Node.js.</p>
                        <div class="mt-4 space-x-4 mb-12">
                            <a target="_blank" href="https://store-api.romariosarmiento.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/web.png" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-api" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/social-medias/github.png" />
                            </a>
                            <a target="_blank" href="https://www.postman.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/social-medias/postman.png" />
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="h-fit-content rounded-md" src="~/assets/img/portfolio/project-4.jpg" />
                        <p class="mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl">TEST 4</p>
                        <p class="font-light text-sm md:text-base lg:text-base 2xl:text-lg text-gray-600">Desarrollada con Node.js.</p>
                        <div class="mt-4 space-x-4 mb-12">
                            <a target="_blank" href="https://store-api.romariosarmiento.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/web.png" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-api" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/social-medias/github.png" />
                            </a>
                            <a target="_blank" href="https://www.postman.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/social-medias/postman.png" />
                            </a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="h-fit-content rounded-md" src="~/assets/img/portfolio/project-5.jpg" />
                        <p class="mt-4 font-medium text-base md:text-lg lg:text-lg 2xl:text-xl">TEST 5</p>
                        <p class="font-light text-sm md:text-base lg:text-base 2xl:text-lg text-gray-600">Desarrollada con Node.js.</p>
                        <div class="mt-4 space-x-4 mb-12">
                            <a target="_blank" href="https://store-api.romariosarmiento.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/web.png" />
                            </a>
                            <a target="_blank" href="https://github.com/romariosc15/store-api" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/social-medias/github.png" />
                            </a>
                            <a target="_blank" href="https://www.postman.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                                <img class="w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8" src="~/assets/img/social-medias/postman.png" />
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
    }
}
</script>