<template>
    <div class="my-shadow h-screen flex flex-col px-6 py-8 space-y-2">
        <div>
            <h3 class="text-3xl 2xl:text-4xl font-extrabold">Portafolio</h3>
            <h5 class="text-sm 2xl:text-md font-normal mb-4 ml-0.5">Experiencia y Proyectos</h5>
        </div>
        <nuxt-link :to="{path: '', hash: '#home'}" v-on:click="scrollTo('home')">
            <div :class="getClasses('#home') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <HomeIcon class="h-5 w-5 text-gray-500 mr-2" />
                <p class="text-gray-600 font-medium text-sm">Inicio</p>
            </div>
        </nuxt-link>
        <nuxt-link :to="{path: '', hash: '#about'}" v-on:click="scrollTo('about')">
            <div :class="getClasses('#about') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <UserIcon class="h-5 w-5 text-gray-500 mr-2" />
                <p class="text-gray-600 font-medium text-sm">Sobre mi</p>
            </div>
        </nuxt-link>
        <nuxt-link :to="{path: '', hash: '#portfolio'}" v-on:click="scrollTo('portfolio')">
            <div :class="getClasses('#portfolio') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <FolderIcon class="h-5 w-5 text-gray-500 mr-2" />
                <p class="text-gray-600 font-medium text-sm">Portafolio</p>
            </div>
        </nuxt-link>
        <nuxt-link :to="{path: '', hash: '#contact'}" v-on:click="scrollTo('contact')">
            <div :class="getClasses('#contact') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <PhoneIcon class="h-5 w-5 text-gray-500 mr-2" />
                <p class="text-gray-600 font-medium text-sm">Contacto</p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
import { HomeIcon, UserIcon, FolderIcon, PhoneIcon } from "@heroicons/vue/outline/index.js";

export default {
    setup() {
        const currentPath = usePath();
        return {
            currentPath
        }
    },
    components: {
        HomeIcon,
        UserIcon,
        FolderIcon,
        PhoneIcon
    },
    methods: {
        getClasses(hash){
            return this.currentPath === hash ? 'bg-gray-100 ' : '';
        },
        scrollTo(id){
            this.currentHash = `#${id}`;
            this.currentPath = this.currentHash;
            document.getElementById(id).scrollIntoView();
        }
    }
}
</script>