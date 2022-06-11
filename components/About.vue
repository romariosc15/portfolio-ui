<template>
    <div id="about" class="h-screen xl:grid xl:grid-cols-10 2xl:grid-cols-7 xl:gap-2 2xl:gap-4">
        <div class="mx-6 md:mx-12 xl:mr-0 xl:ml-12 2xl:ml-20 pt-8 md:pt-12 2xl:pt-24 xl:col-span-7 2xl:col-span-5">
            <h1 class="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">Sobre mi</h1>
            <p class="mt-4 md:mt-6 2xl:mt-8 text-sm md:text-lg lg:text-lg 2xl:text-2xl font-light text-gray-700">Hola, soy <span class="font-medium">Romario Sarmiento</span></p>
            <p class="mt-2 md:mt-4 2xl:mt-4 text-sm md:text-md lg:text-md 2xl:text-xl font-light text-justify text-gray-500">Bachiller en Ingeniería de Sistemas e Informática de la Universidad Nacional de Moquegua, con experiencia trabajando con equipos de varias partes del mundo.</p>
            <p class="mt-2 2xl:mt-4 text-sm md:text-md lg:text-md 2xl:text-xl font-light text-justify text-gray-500">Poseo conocimiento en trabajo colaborativo con sistemas de control de versiones, suficiencia para transformar maquetas a código interpretable por el navegador y con la capacidad de realizar pruebas unitarias al código desarrollado.</p>
            <p class="mt-2 md:mt-4 2xl:mt-6 text-sm md:text-md lg:text-md 2xl:text-xl font-light text-justify text-gray-500">Tengo conocimiento y/o experiencia en las siguientes tecnologías:</p>
            <div class="mt-2 2xl:mt-4">
                <ul class="columns-3 text-gray-600">
                    <li v-for="(v, i) in technologies" v-bind:key="i" class="text-xs md:text-sm lg:text-sm 2xl:text-lg"><MinusSmIcon class="w-3 md:w-5 mr-2 inline-block" />{{v}}</li>
                </ul>
            </div>
            <p class="mt-2 md:mt-4 2xl:mt-6 text-sm md:text-md lg:text-md 2xl:text-xl font-light text-justify text-gray-500">Entre otras habilidades, destaco lo siguiente:</p>
            <div class="mt-2 2xl:mt-4">
                <ul class="columns-2 lg:columns-2 xl:columns-3 text-gray-600">
                    <li v-for="(v, i) in skills" v-bind:key="i" class="text-xs md:text-sm lg:text-sm 2xl:text-lg"><MinusSmIcon class="w-3 md:w-5 mr-2 inline-block" />{{v}}</li>
                </ul>
            </div>
        </div>
        <div class="hidden xl:block xl:col-span-3 2xl:col-span-2 flex items-center justify-center pl-6 pr-8 2xl:px-12 my-auto">
            <img class="w-full h-fit-content rounded-md" src="~/assets/img/about/main.jpg" />
        </div>
    </div>
</template>

<script>
import { MinusSmIcon } from "@heroicons/vue/outline/index.js";

const technologies = [
    "JS y TS",
    "Vue",
    "Nuxt.js",
    "Jest",
    "Git y GitHub",
    "Postman",
    "Node.js",
    "SQL",
    "MongoDB",
    "CSS y SASS",
    "React y Redux",
    "Heroku y AWS"
];

const skills = [
    "Scrum",
    "Azure TFS",
    "Inglés intermedio",
    "Responsive design",
];

export default {
    components: {
        MinusSmIcon
    },
    data: function () {
        return {
            technologies: technologies,
            skills: skills
        }
    },
}
</script>
