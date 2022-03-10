<template>
    <div id="about" class="h-screen grid grid-cols-7 gap-4">
        <div class="ml-20 pt-24 col-span-5">
            <h1 class="text-7xl font-extrabold">Sobre mi</h1>
            <p class="mt-10 text-2xl font-light">Hola, soy <span class="font-medium">Romario Sarmiento</span></p>
            <p class="mt-4 text-xl font-light text-justify">Bachiller en Ingeniería de Sistemas e Informática de la Universidad Nacional de Moquegua, con experiencia trabajando con equipos de varias partes del mundo.</p>
            <p class="mt-4 text-xl font-light text-justify">Poseo conocimiento en trabajo colaborativo con sistemas de control de versiones, suficiencia para transformar maquetas brindadas por el equipo de diseño en código interpretable por el navegador y con la capacidad de realizar pruebas unitarias al código desarrollado.</p>
            <p class="mt-6 text-xl font-light text-justify">Tengo conocimiento y/o experiencia en las siguientes tecnologías:</p>
            <div class="mt-4">
                <ul class="columns-3">
                    <li v-for="(v, i) in technologies" v-bind:key="i"><MinusSmIcon class="w-5 mr-2 inline-block" />{{v}}</li>
                </ul>
            </div>
            <p class="mt-6 text-xl font-light text-justify">Entre otras habilidades, destaco lo siguiente:</p>
            <div class="mt-4">
                <ul class="columns-3">
                    <li v-for="(v, i) in skills" v-bind:key="i"><MinusSmIcon class="w-5 mr-2 inline-block" />{{v}}</li>
                </ul>
            </div>
        </div>
        <div class="col-span-2 flex items-center justify-center px-12">
            <img class="w-full h-fit-content rounded-md" src="~/assets/img/about/main.jpg" />
        </div>
    </div>
</template>

<script>
import { MinusSmIcon } from "@heroicons/vue/outline";

const technologies = [
    "JavaScript",
    "TypeScript",
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
