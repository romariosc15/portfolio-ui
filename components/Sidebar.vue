<template>
    <div class="flex flex-col px-6 py-8 space-y-2">
        <a href="/">
            <div :class="getClasses('/') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <HomeIcon class="h-5 w-5 text-gray-500 font-light mr-2 stroke-1" />
                <p class="text-gray-600 font-medium text-sm">Inicio</p>
            </div>
        </a>
        <a href="/about">
            <div :class="getClasses('/about') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <UserIcon class="h-5 w-5 text-gray-500 font-light mr-2 stroke-1" />
                <p class="text-gray-600 font-medium text-sm">Sobre mi</p>
            </div>
        </a>
        <a href="/portfolio">
            <div :class="getClasses('/portfolio') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <FolderIcon class="h-5 w-5 text-gray-500 font-light mr-2 stroke-1" />
                <p class="text-gray-600 font-medium text-sm">Portafolio</p>
            </div>
        </a>
        <a href="/contact">
            <div :class="getClasses('/contact') + 'flex flex-row items-center px-5 py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                <PhoneIcon class="h-5 w-5 text-gray-500 font-light mr-2 stroke-1" />
                <p class="text-gray-600 font-medium text-sm">Contacto</p>
            </div>
        </a>
    </div>
</template>

<script>
import { HomeIcon, UserIcon, FolderIcon, PhoneIcon } from "@heroicons/vue/outline";

export default {
    props: {
        currentPath: String
    },
    components: {
        HomeIcon,
        UserIcon,
        FolderIcon,
        PhoneIcon
    },
    methods: {
        getClasses(path){ 
            return this.currentPath === path ? 'bg-gray-100 ' : '';
        }
    }
}
</script>