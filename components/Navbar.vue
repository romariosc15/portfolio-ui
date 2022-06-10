<template>
    <div class="my-shadow py-3 px-6 flex flex-row items-center justify-between">
        <img class="h-7" src="~/assets/img/logo.png" />
        <div class="flex flex-row">
            <nuxt-link :to="{path: '', hash: '#home'}" v-on:click="scrollTo('home')">
                <div :class="'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                    <HomeIcon class="h-5 w-5 text-gray-500 mr-2 stroke-1" />
                    <p class="text-gray-600 font-medium text-sm">Inicio</p>
                </div>
            </nuxt-link>
            <nuxt-link :to="{path: '', hash: '#about'}" v-on:click="scrollTo('about')">
                <div :class="'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                    <UserIcon class="h-5 w-5 text-gray-500 mr-2 stroke-1" />
                    <p class="text-gray-600 font-medium text-sm">Sobre mi</p>
                </div>
            </nuxt-link>
            <nuxt-link :to="{path: '', hash: '#portfolio'}" v-on:click="scrollTo('portfolio')">
                <div :class="'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                    <FolderIcon class="h-5 w-5 text-gray-500 mr-2 stroke-1" />
                    <p class="text-gray-600 font-medium text-sm">Portafolio</p>
                </div>
            </nuxt-link>
            <nuxt-link :to="{path: '', hash: '#contact'}" v-on:click="scrollTo('contact')">
                <div :class="'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                    <PhoneIcon class="h-5 w-5 text-gray-500 mr-2 stroke-1" />
                    <p class="text-gray-600 font-medium text-sm">Contacto</p>
                </div>
            </nuxt-link>
        </div>
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
        scrollTo(id){
            this.currentHash = `#${id}`;
            this.currentPath = this.currentHash;
            document.getElementById(id).scrollIntoView();
        }
    }
}
</script>