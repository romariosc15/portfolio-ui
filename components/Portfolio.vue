<template>
    <div id="portfolio" class="h-screen bg-gray-50">
        <div class="mx-20 pt-24 col-span-5">
            <h1 class="text-7xl font-extrabold">Portafolio</h1>
            <p class="mt-8 text-xl font-light text-justify text-gray-500">En esta sección podrás encontrar los proyectos que he desarrollado para demostrar mis habilidades como desarrollador web.</p>
            <div class="grid grid-cols-3 gap-6 mt-12">
                <div>
                    <img class="w-full h-fit-content rounded-md" src="~/assets/img/portfolio/project-1.jpg" />
                    <p class="mt-4 font-medium text-xl">Tienda virtual</p>
                    <p class="font-light text-lg text-gray-600">Desarrollado con React y Redux.</p>
                    <div class="mt-2 space-x-4">
                        <a href="https://store.romariosarmiento.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                            <img class="w-8 h-8" src="~/assets/img/web.png" />
                        </a>
                        <a href="https://github.com/romariosc15/store" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                            <img class="w-8 h-8" src="~/assets/img/social-medias/github.png" />
                        </a>
                    </div>
                </div>
                <div>
                    <img class="w-full h-fit-content rounded-md" src="~/assets/img/portfolio/project-2.jpg" />
                    <p class="mt-4 font-medium text-xl">API REST</p>
                    <p class="font-light text-lg text-gray-600">Desarrollada con Node.js y Express.</p>
                    <div class="mt-2 space-x-4">
                        <a href="https://store.romariosarmiento.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                            <img class="w-8 h-8" src="~/assets/img/web.png" />
                        </a>
                        <a href="https://github.com/romariosc15/store" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                            <img class="w-8 h-8" src="~/assets/img/social-medias/github.png" />
                        </a>
                        <a href="https://www.postman.com" class="inline-block text-gray-900 hover:text-gray-400 transition-colors duration-400">
                            <SvgPostman :class="'fill-black'" />
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