<template>
    <div id="about" class="h-screen lg:grid lg:grid-cols-10 2xl:grid-cols-7 lg:gap-2 2xl:gap-4">
        <div class="md:mx-12 lg:mr-0 lg:ml-12 2xl:ml-20 pt-12 2xl:pt-24 lg:col-span-7 2xl:col-span-5">
            <h1 class="md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold">Sobre mi</h1>
            <p class="mt-6 2xl:mt-8 md:text-lg lg:text-lg 2xl:text-2xl font-light text-gray-700">Hola, soy <span class="font-medium">Romario Sarmiento</span></p>
            <p class="mt-4 2xl:mt-4 md:text-md lg:text-md 2xl:text-xl font-light text-justify text-gray-500">Bachiller en Ingeniería de Sistemas e Informática de la Universidad Nacional de Moquegua, con experiencia trabajando con equipos de varias partes del mundo.</p>
            <p class="mt-2 2xl:mt-4 md:text-md lg:text-md 2xl:text-xl font-light text-justify text-gray-500">Poseo conocimiento en trabajo colaborativo con sistemas de control de versiones, suficiencia para transformar maquetas brindadas por el equipo de diseño a código interpretable por el navegador y con la capacidad de realizar pruebas unitarias al código desarrollado.</p>
            <p class="mt-4 2xl:mt-6 md:text-md lg:text-md 2xl:text-xl font-light text-justify text-gray-500">Tengo conocimiento y/o experiencia en las siguientes tecnologías:</p>
            <div class="mt-2 2xl:mt-4">
                <ul class="columns-3 text-gray-600">
                    <li v-for="(v, i) in technologies" v-bind:key="i" class="md:text-sm lg:text-sm 2xl:text-lg"><MinusSmIcon class="w-5 mr-2 inline-block" />{{v}}</li>
                </ul>
            </div>
            <p class="mt-4 2xl:mt-6 md:text-md lg:text-md 2xl:text-xl font-light text-justify text-gray-500">Entre otras habilidades, destaco lo siguiente:</p>
            <div class="mt-2 2xl:mt-4">
                <ul class="lg:columns-2 xl:columns-3 text-gray-600">
                    <li v-for="(v, i) in skills" v-bind:key="i" class="md:text-sm lg:text-sm 2xl:text-lg"><MinusSmIcon class="w-5 mr-2 inline-block" />{{v}}</li>
                </ul>
            </div>
        </div>
        <div class="hidden lg:block lg:col-span-3 2xl:col-span-2 flex items-center justify-center lg:px-8 2xl:px-12 my-auto">
            <img class="w-full h-fit-content rounded-md" src="~/assets/img/about/main.jpg" />
        </div>
    </div>
</template>

<script>
import { MinusSmIcon } from "@heroicons/vue/outline/index.js";

const technologies = [
    "JavaScript y TypeScript",
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
    "Marco de trabajo de Scrum",
    "Azure DevOps",
    "Inglés intermedio",
    "Responsive design",
    "Autodidacta"
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
