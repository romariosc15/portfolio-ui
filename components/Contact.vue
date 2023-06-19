<template>
    <div id="contact" :class="'md:grid md:grid-cols-5 lg:grid-cols-10 2xl:grid-cols-7 lg:gap-2 2xl:gap-4 transition-colors duration-300' + (darkMode ? ' lg:pl-2 bg-gray-100' : ' lg:ml-2 bg-white')">
        <div class="mx-6 md:mx-12 lg:mr-0 lg:ml-12 2xl:ml-20 pt-8 md:pt-12 2xl:pt-24 md:col-span-3 lg:col-span-7 2xl:col-span-5 pb-8 md:pb-12 2xl:pb-24">
            <h1 class="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black">Contacto</h1>
            <p :class="'mt-4 md:mt-6 2xl:mt-8 text-sm md:text-md lg:text-lg 2xl:text-xl font-light text-justify' + (darkMode ? ' text-gray-700' : ' text-gray-500')">¿Tienes en mente algún proyecto? No dudes en ponerte en contacto conmigo.</p>
            <div class="mt-6 2xl:mt-8 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 2xl:gap-8">
                <div :class="'mx-12 md:mx-0 md:w-8/12 lg:w-full p-4 rounded-md transition-colors duration-300' + (darkMode ? ' bg-gray-600' : ' bg-gray-50')">
                    <h5 :class="'text-sm md:text-md lg:text-lg 2xl:text-xl font-medium' + (darkMode ? ' text-gray-100' : '')">Teléfono</h5>
                    <p :class="'font-light text-xs md:text-sm lg:text-sm 2xl:text-lg' + (darkMode ? ' text-gray-100' : '')">+51 999 888 999</p>
                </div>
                <div :class="'mx-12 md:mx-0 md:w-8/12 lg:w-full p-4 rounded-md transition-colors duration-300' + (darkMode ? ' bg-gray-600' : ' bg-gray-50')">
                    <h5 :class="'text-sm md:text-md lg:text-lg 2xl:text-xl font-medium' + (darkMode ? ' text-gray-100' : '')">Correo</h5>
                    <p :class="'font-light text-xs md:text-sm lg:text-sm 2xl:text-lg' + (darkMode ? ' text-gray-100' : '')">romariosc15@outlook.com</p>
                </div>
                <div :class="'mx-12 md:mx-0 md:w-8/12 lg:w-full p-4 rounded-md transition-colors duration-300' + (darkMode ? ' bg-gray-600' : ' bg-gray-50')">
                    <h5 :class="'text-sm md:text-md lg:text-lg 2xl:text-xl font-medium' + (darkMode ? ' text-gray-100' : '')">Ubicación</h5>
                    <p :class="'font-light text-xs md:text-sm lg:text-sm 2xl:text-lg' + (darkMode ? ' text-gray-100' : '')">Ilo, Perú</p>
                </div>
            </div>
            <p :class="'mt-6 2xl:mt-8 text-sm md:text-md lg:text-lg 2xl:text-xl font-light text-justify' + (darkMode ? ' text-gray-700' : ' text-gray-500')">Encuentrame también en las siguientes redes:</p>
            <div class="mt-4 xl:mt-6 2xl:mt-8 space-y-4 xl:space-y-6">
                <div class="flex items-center">
                    <div class="flex items-center basis-6 lg:basis-7 xl:basis-8 mr-4">
                        <font-awesome-icon class="text-xl lg:text-2xl 2xl:text-3xl" :icon="['fab', 'linkedin']" />
                    </div>
                    <a target="_blank" href="https://www.linkedin.com/in/romariosarmiento/" class="text-xs md:text-sm lg:text-md xl:text-lg inline-block font-light hover:underline">Jaime Romario Sarmiento</a>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center basis-6 lg:basis-7 xl:basis-8 mr-4">
                        <font-awesome-icon class="text-xl lg:text-2xl 2xl:text-3xl" :icon="['fab', 'github']" />
                    </div>
                    <a target="_blank" href="https://github.com/romariosc15" class="text-xs md:text-sm lg:text-md xl:text-lg inline-block font-light hover:underline">romariosc15</a>
                </div>
            </div>
        </div>
        <div class="hidden md:flex md:col-span-2 lg:col-span-3 2xl:col-span-2 items-center justify-center md:pr-12 lg:pr-8 lg:pl-6 2xl:px-12 my-auto">
            <img class="lg:w-full h-fit-content rounded-md" src="~/assets/img/contact/main.jpg" alt="Contacta a Romario Sarmiento - Imagen obtenida de Unsplash" />
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