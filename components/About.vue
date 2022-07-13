<template>
    <div id="about" :class="'transition-colors duration-300' + (darkMode ? ' lg:pl-2 bg-gray-100' : ' lg:ml-2 bg-white')">
        <div class="mx-6 md:mx-12 xl:mx-12 2xl:mx-20 pt-12 2xl:pt-24 pb-10 2xl:pb-24">
            <h1 class="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black">Sobre mi</h1>
            <p :class="'mt-6 2xl:mt-8 text-sm md:text-base lg:text-lg 2xl:text-xl font-light text-justify' + (darkMode ? ' text-gray-700' : ' text-gray-500')">Hola, soy <span class="font-medium text-gray-700">Romario Sarmiento</span> y soy <span class="font-medium text-gray-700">Desarrollador Front end</span> con experiencia como <span class="font-medium text-gray-700">Desarrollador Web Full Stack</span>. </p>
            <p :class="'mt-3 md:mt-4 2xl:mt-4 text-sm md:text-base lg:text-base 2xl:text-xl font-light text-justify' + (darkMode ? ' text-gray-700' : ' text-gray-500')">
                Bachiller en Ingeniería de Sistemas e Informática de la Universidad Nacional de Moquegua, con experiencia trabajando con equipos de varias partes del mundo.<br>
            </p>
            <p :class="'mt-3 md:mt-4 2xl:mt-4 text-sm md:text-base lg:text-base 2xl:text-xl font-light text-justify' + (darkMode ? ' text-gray-700' : ' text-gray-500')">Mi experiencia es la siguiente:</p>
            <div class="mt-4 2xl:mt-6">
                <Timeline :darkMode="darkMode" :experience="experience"/>
            </div>
        </div>
    </div>
</template>

<script>

const experience = [
    {
        company: 'Globant',
        image: 'globant-logo.png',
        url: 'https://www.globant.com/',
        position: 'Web UI Developer',
        period: 'Nov. 2021 - Actualidad',
        description: 'Trabajo actualmente en la cuenta de TaxAct (USA), corrigiendo errores y agregando nueva funcionalidad en las aplicaciones desarrolladas con Nuxt, Express y Contentful CMS. <br> El manejo del flujo de trabajo lo realizamos mediante Azure TFS y el marco de trabajo de Scrum.'
    },
    {
        company: 'Oktana',
        image: 'oktana-logo.png',
        url: 'https://oktana.com/',
        position: 'Software Engineer',
        period: 'Sep. 2020 - Oct. 2021',
        description: 'Trabajé en el desarrollo de la aplicación: <a class="underline" href="https://lowtidebeta.herokuapp.com/" target="_blank" rel="noopener noreferrer">Lowtide</a>, tanto de su interfaz de usuario (desarrollada en Vue.js, Nuxt.js y Tailwind CSS), como de su API REST (construida con Node.js y Express.js). <br> Control de versiones de código con Git y GitHub. Equipo de trabajo multicultural.'
    },
    {
        company: 'Innovahora',
        url: 'https://innovahora.com/',
        image: 'innovahora-logo.png',
        position: 'Full Stack Web Developer',
        period: 'Sep. 2019 - Ago. 2020',
        description: 'Desarrollo de tiendas virtuales con un panel para la gestión de contenido, utilizando tecnologías como JavaScript, PHP, JQuery, Laravel, Vue.js y Bootstrap. <br> Creación y consulta a Bases de Datos SQL Server y MySQL. Control de versiones de código con Git y GitHub.'
    }
];

export default {
    setup() {
        const darkMode = useDarkMode();
        return {
            darkMode
        }
    },
    data: function () {
        return {
            experience: experience
        }
    }
}
</script>
