<template>
    <div :class="'my-shadow h-screen flex flex-col px-6 py-8 transition-colors duration-300' + (darkMode ? ' bg-black' : '')">
        <div :class="'mb-2' + (darkMode ? ' text-white' : '')">
            <h3 class="text-3xl 2xl:text-4xl font-extrabold">Portafolio</h3>
            <h5 class="text-sm 2xl:text-md font-normal mb-4 ml-0.5">Experiencia y Proyectos</h5>
        </div>
        <nuxt-link class="mb-2" :to="{path: '', hash: '#home'}" v-on:click="scrollTo('home')">
            <div :class="getClasses('#home') + 'flex flex-row items-center px-5 py-3 rounded-md transition-colors duration-300' + (darkMode ? ' hover:bg-gray-600' : ' hover:bg-gray-100')">
                <div class="basis-8 mr-2">
                    <font-awesome-icon :class="'2xl:text-lg' + (darkMode ? ' text-gray-100' : ' text-gray-500')" :icon="['fas', 'house']" />
                </div>
                <p :class="'font-medium text-sm' + (darkMode ? ' text-gray-100' : ' text-gray-600')">Inicio</p>
            </div>
        </nuxt-link>
        <nuxt-link class="mb-2" :to="{path: '', hash: '#about'}" v-on:click="scrollTo('about')">
            <div :class="getClasses('#about') + 'flex flex-row items-center px-5 py-3 rounded-md transition-colors duration-300' + (darkMode ? ' hover:bg-gray-600' : ' hover:bg-gray-100')">
                <div class="basis-8 mr-2">
                    <font-awesome-icon :class="'2xl:text-lg' + (darkMode ? ' text-gray-100' : ' text-gray-500')" :icon="['fas', 'user']" />
                </div>
                <p :class="'font-medium text-sm' + (darkMode ? ' text-gray-100' : ' text-gray-600')">Sobre mi</p>
            </div>
        </nuxt-link>
        <nuxt-link class="mb-2" :to="{path: '', hash: '#portfolio'}" v-on:click="scrollTo('portfolio')">
            <div :class="getClasses('#portfolio') + 'flex flex-row items-center px-5 py-3 rounded-md transition-colors duration-300' + (darkMode ? ' hover:bg-gray-600' : ' hover:bg-gray-100')">
                <div class="basis-8 mr-2">
                    <font-awesome-icon :class="'2xl:text-lg' + (darkMode ? ' text-gray-100' : ' text-gray-500')" :icon="['fas', 'folder']" />
                </div>
                <p :class="'font-medium text-sm' + (darkMode ? ' text-gray-100' : ' text-gray-600')">Portafolio</p>
            </div>
        </nuxt-link>
        <nuxt-link class="mb-2" :to="{path: '', hash: '#contact'}" v-on:click="scrollTo('contact')">
            <div :class="getClasses('#contact') + 'flex flex-row items-center px-5 py-3 rounded-md transition-colors duration-300' + (darkMode ? ' hover:bg-gray-600' : ' hover:bg-gray-100')">
                <div class="basis-8 mr-2">
                    <font-awesome-icon :class="'2xl:text-lg' + (darkMode ? ' text-gray-100' : ' text-gray-500')" :icon="['fas', 'phone']" />
                </div>
                <p :class="'font-medium text-sm' + (darkMode ? ' text-gray-100' : ' text-gray-600')">Contacto</p>
            </div>
        </nuxt-link>
        <div class="mt-auto">
            <FormSwitch :darkMode="darkMode" @switch="switched" />
        </div>
    </div>
</template>

<script>

export default {
    setup() {
        const currentPath = usePath();
        const darkMode = useDarkMode();
        return {
            currentPath,
            darkMode
        }
    },
    methods: {
        getClasses(hash){
            return this.currentPath === hash ? (this.darkMode ? 'bg-gray-600 ' : 'bg-gray-100 ') : '';
        },
        scrollTo(id){
            this.currentHash = `#${id}`;
            this.currentPath = this.currentHash;
            document.getElementById(id).scrollIntoView();
        },
        switched(){
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
        }
    }
}
</script>