<template>
    <div class="sidebar-shadow h-screen flex flex-col px-6 py-8 space-y-2">
        <nuxt-link :to="{path: '', hash: '#home'}" @click="scrollTo('home')">
            <div :class="getClasses('#home') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <HomeIcon class="h-5 w-5 text-gray-500 font-light mr-2 stroke-1" />
                <p class="text-gray-600 font-medium text-sm">Inicio</p>
            </div>
        </nuxt-link>
        <nuxt-link :to="{path: '', hash: '#about'}" @click="scrollTo('about')">
            <div :class="getClasses('#about') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <UserIcon class="h-5 w-5 text-gray-500 font-light mr-2 stroke-1" />
                <p class="text-gray-600 font-medium text-sm">Sobre mi</p>
            </div>
        </nuxt-link>
        <nuxt-link :to="{path: '', hash: '#portfolio'}" @click="scrollTo('portfolio')">
            <div :class="getClasses('#portfolio') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <FolderIcon class="h-5 w-5 text-gray-500 font-light mr-2 stroke-1" />
                <p class="text-gray-600 font-medium text-sm">Portafolio</p>
            </div>
        </nuxt-link>
        <nuxt-link :to="{path: '', hash: '#contact'}" @click="scrollTo('contact')">
            <div :class="getClasses('#contact') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <PhoneIcon class="h-5 w-5 text-gray-500 font-light mr-2 stroke-1" />
                <p class="text-gray-600 font-medium text-sm">Contacto</p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
import { HomeIcon, UserIcon, FolderIcon, PhoneIcon } from "@heroicons/vue/outline";

export default {
    props: {
    },
    data: function () {
        return {
            currentHash: '#home'
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
            return this.currentHash === hash ? 'bg-gray-100 ' : '';
        },
        scrollTo(id){
            this.currentHash = `#${id}`;
            document.getElementById(id).scrollIntoView();
        }
    }
}
</script>

<style scoped>
    .sidebar-shadow{
        box-shadow: 3px 0 5px #f5f5f5
    }
</style>