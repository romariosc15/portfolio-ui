<template>
    <div id="portfolio" class="h-screen bg-gray-50">
        <div class="md:mx-12 lg:mr-0 lg:mx-12 2xl:mx-20 lg:pt-8 22xl:pt-24 col-span-5">
            <h1 class="md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold">Portafolio</h1>
            <p class="mt-6 2xl:mt-8 md:text-lg lg:text-lg 2xl:text-xl font-light text-justify text-gray-500">En esta sección podrás encontrar los proyectos que he desarrollado para demostrar mis habilidades como desarrollador web.</p>
            <div class="mt-8 2xl:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <img class="w-full h-fit-content rounded-md" src="~/assets/img/portfolio/project-1.jpg" />
                    <p class="mt-4 font-medium md:text-lg lg:text-lg 2xl:text-xl">Tienda virtual</p>
                    <p class="font-light md:text-md lg:text-md 2xl:text-lg text-gray-600">Desarrollado con React y Redux.</p>
                    <div class="mt-4 space-x-4">
                        <a target="_blank" href="https://store.romariosarmiento.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                            <img class="w-8 h-8" src="~/assets/img/web.png" />
                        </a>
                        <a target="_blank" href="https://github.com/romariosc15/store-ui" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                            <img class="w-8 h-8" src="~/assets/img/social-medias/github.png" />
                        </a>
                    </div>
                </div>
                <div>
                    <img class="w-full h-fit-content rounded-md" src="~/assets/img/portfolio/project-2.jpg" />
                    <p class="mt-4 font-medium md:text-lg lg:text-lg 2xl:text-xl">API REST</p>
                    <p class="font-light md:text-md lg:text-md 2xl:text-lg text-gray-600">Desarrollada con Node.js.</p>
                    <div class="mt-4 space-x-4">
                        <a target="_blank" href="https://store-api.romariosarmiento.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                            <img class="w-8 h-8" src="~/assets/img/web.png" />
                        </a>
                        <a target="_blank" href="https://github.com/romariosc15/store-api" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                            <img class="w-8 h-8" src="~/assets/img/social-medias/github.png" />
                        </a>
                        <a target="_blank" href="https://www.postman.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                            <SvgPostman :classes="'fill-black'" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
    },
    data: function () {
        return {
            
        }
    },
    components: {
    },
    methods: {
        
    }
}
</script>