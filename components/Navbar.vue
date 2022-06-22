<template>
    <div :class="'my-shadow py-2 sm:py-3 px-4 sm:px-6 flex flex-row items-center justify-between transition-colors duration-300' + (darkMode ? ' bg-gray-100' : '')">
        <Menu as="div" class="relative inline-block text-left text-xl">
            <div>
                <MenuButton
                :class="'inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75' + (darkMode ? ' border border-gray-400' : ' border')"
                >
                    <font-awesome-icon :class="(darkMode ? ' text-gray-700' : ' text-gray-500')" :icon="['fas', 'bars']" />
                </MenuButton>
            </div>

            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                :class="'absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' + (darkMode ? ' bg-gray-100' : ' bg-white')"
                >
                    <div class="px-1 py-1">
                        <MenuItem>
                            <button
                                :class="[
                                darkMode ? 'text-gray-700' : ' text-gray-500',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]"
                                @click="switchDarkMode()"
                            >
                                
                                <font-awesome-icon :class="'mr-2'" :icon="['fas', 'moon']" />{{darkMode ? 'Desactivar modo oscuro' : 'Activar modo oscuro'}}
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
        <div class="flex flex-row space-x-2">
            <nuxt-link :to="{path: '', hash: '#home'}" v-on:click="scrollTo('home')">
                <div :class="'flex flex-row justify-center items-center px-3 sm:px-5 py-2 sm:py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                    <font-awesome-icon :class="'2xl:text-lg mr-3' + (darkMode ? ' text-gray-700' : ' text-gray-500')" :icon="['fas', 'house']" />
                    <p class="hidden sm:block text-gray-600 font-medium text-sm">Inicio</p>
                </div>
            </nuxt-link>
            <nuxt-link :to="{path: '', hash: '#about'}" v-on:click="scrollTo('about')">
                <div :class="'flex flex-row justify-center items-center px-3 sm:px-5 py-2 sm:py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                    <font-awesome-icon :class="'2xl:text-lg mr-3' + (darkMode ? ' text-gray-700' : ' text-gray-500')" :icon="['fas', 'user']" />
                    <p class="hidden sm:block text-gray-600 font-medium text-sm">Sobre mi</p>
                </div>
            </nuxt-link>
            <nuxt-link :to="{path: '', hash: '#portfolio'}" v-on:click="scrollTo('portfolio')">
                <div :class="'flex flex-row justify-center items-center px-3 sm:px-5 py-2 sm:py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                    <font-awesome-icon :class="'2xl:text-lg mr-3' + (darkMode ? ' text-gray-700' : ' text-gray-500')" :icon="['fas', 'folder']" />
                    <p class="hidden sm:block text-gray-600 font-medium text-sm">Portafolio</p>
                </div>
            </nuxt-link>
            <nuxt-link :to="{path: '', hash: '#contact'}" v-on:click="scrollTo('contact')">
                <div :class="'flex flex-row justify-center items-center px-3 sm:px-5 py-2 sm:py-3 hover:bg-gray-100 rounded-md transition-colors duration-300'">
                    <font-awesome-icon :class="'2xl:text-lg' + (darkMode ? ' text-gray-700' : ' text-gray-500')" :icon="['fas', 'phone']" />
                    <p class="hidden sm:block text-gray-600 font-medium text-sm">Contacto</p>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
export default {
    components:{
        Menu,
        MenuButton,
        MenuItems, 
        MenuItem
    },
    setup() {
        const currentPath = usePath();
        const darkMode = useDarkMode();
        return {
            currentPath,
            darkMode
        }
    },
    methods: {
        scrollTo(id){
            this.currentHash = `#${id}`;
            this.currentPath = this.currentHash;
            document.getElementById(id).scrollIntoView();
        },
        switchDarkMode(){
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
        }
    }
}
</script>