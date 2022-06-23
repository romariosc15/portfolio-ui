<template>
    <div id="home" :class="'flex items-center justify-center flex-col pt-8 md:pt-12 lg:pt-16 2xl:pt-24 pb-8 md:pb-12 lg:pb-16 2xl:pb-24 transition-colors duration-300' + (darkMode ? ' bg-gray-600' : ' bg-gray-50')">
        <img :class="'w-44 h-44 md:w-64 md:h-64 2xl:w-72 2xl:h-72 rounded-full object-cover border-4 md:border-8' + (darkMode ? ' border-gray-50' : ' border-gray-300')" src="~/assets/img/home/main.jpg" />
        <h1 :class="'mt-6 2xl:mt-8 text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-black' + (darkMode ? ' text-white' : '')">Romario Sarmiento</h1>
        <p :class="'mt-4 md:mt-6 mx-5 text-center text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-light' + (darkMode ? ' text-gray-100' : ' text-gray-600')">Desarrollador web con más de 3 años de experiencia trabajando con equipos angloparlantes.</p>
        <p :class="'mt-1 sm:mt-0 mx-5 text-center text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-light' + (darkMode ? ' text-gray-100' : ' text-gray-600')">Con capacidad para desarrollar software mantenible, funcional, seguro y documentado.</p>
        <div class="mt-6 2xl:mt-8 space-x-10">
            <a target="_blank" class="inline-block text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl" href="https://github.com/romariosc15">
                <font-awesome-icon :class="(darkMode ? 'text-white' : '')" :icon="['fab', 'github']" />
            </a>
            <a target="_blank" class="inline-block text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl" href="https://www.linkedin.com/in/romariosarmiento/">
                <font-awesome-icon :class="(darkMode ? 'text-white' : '')" :icon="['fab', 'linkedin']" />
            </a>
            <a target="_blank" class="inline-block text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl" href="https://www.romariosarmiento.com/cv.pdf">
                <font-awesome-icon :class="(darkMode ? 'text-white' : '')" :icon="['fas', 'fa-file-arrow-down']" />
            </a>
        </div>
    </div>
</template>

<script>

export default {
    setup() {
        const darkMode = useDarkMode();
        return {
            darkMode
        }
    }
}
</script>