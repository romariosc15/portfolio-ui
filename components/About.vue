<template>
    <div id="about" class="xl:grid xl:grid-cols-10 2xl:grid-cols-7 xl:gap-2 2xl:gap-4">
        <div class="mx-6 md:mx-12 xl:mr-0 xl:ml-12 2xl:ml-20 pt-12 2xl:pt-24 xl:col-span-7 2xl:col-span-5 pb-10 2xl:pb-24">
            <h1 class="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">Sobre mi</h1>
            <p class="mt-6 2xl:mt-8 text-md md:text-lg lg:text-lg 2xl:text-xl font-light text-gray-500">Hola, soy <span class="font-medium text-gray-700">Romario Sarmiento</span></p>
            <p class="mt-3 md:mt-4 2xl:mt-4 text-sm lg:text-md 2xl:text-xl font-light text-justify text-gray-500">
                Bachiller en Ingeniería de Sistemas e Informática de la Universidad Nacional de Moquegua, con experiencia trabajando con equipos de varias partes del mundo.<br>
            </p>
            <p class="mt-3 md:mt-4 2xl:mt-4 text-sm lg:text-md 2xl:text-xl font-light text-justify text-gray-500">Mi experiencia es la siguiente:</p>
            <div class="mt-4 2xl:mt-6">
                <Timeline :experience="experience"/>
            </div>
        </div>
        <div class="hidden xl:block xl:col-span-3 2xl:col-span-2 flex items-center justify-center pl-6 pr-8 2xl:px-12 my-auto">
            <img class="w-full h-fit-content rounded-md" src="~/assets/img/about/main.jpg" />
        </div>
    </div>
</template>

<script>
import { MinusSmIcon } from "@heroicons/vue/outline/index.js";

const experience = [
    {
        company: 'Globant',
        image: 'globant-logo.png',
        position: 'Web UI Developer',
        period: 'Nov. 2021 - Actualidad',
        description: 'Trabajo actualmente en la cuenta de TaxAct (USA), corrigiendo errores y agregando nueva funcionalidad en las aplicaciones desarrolladas con Nuxt, Express y Contentful CMS. <br> El manejo del flujo de trabajo lo realizamos mediante Azure TFS y el marco de trabajo de Scrum.'
    },
    {
        company: 'Oktana',
        image: 'oktana-logo.png',
        position: 'Software Engineer',
        period: 'Sep. 2020 - Oct. 2021',
        description: 'Trabajé en el desarrollo de la aplicación: <a class="underline" href="https://lowtidebeta.herokuapp.com/" target="_blank" rel="noopener noreferrer">Lowtide</a>, tanto de su interfaz de usuario (desarrollada en Vue.js, Nuxt y Tailwind CSS), como de su API REST (construida con Node.js y Express). <br> Control de versiones de código con Git y GitHub. Equipo de trabajo multicultural.'
    },
    {
        company: 'Innovahora',
        image: 'innovahora-logo.png',
        position: 'Web UI Developer',
        period: 'Sep. 2019 - Ago. 2020',
        description: 'Desarrollo de tiendas virtuales con un panel para la gestión de contenido, utilizando tecnologías como JavaScript, PHP, JQuery, Laravel, Vue.js y Bootstrap. <br> Creación y consulta a Bases de Datos SQL Server y MySQL. Control de versiones de código con Git y GitHub.'
    }
];

export default {
    components: {
        MinusSmIcon
    },
    data: function () {
        return {
            experience: experience
        }
    },
}
</script>
