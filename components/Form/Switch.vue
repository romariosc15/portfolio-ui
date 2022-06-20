<template>
    <div class="flex items-center">
        <label :class="'mr-6' + (darkMode ? ' text-white' : '')" for="dark-mode">Modo oscuro</label>
        <label class="switch flex items-center">
            <input id="dark-mode" type="checkbox" />
            <div @click="emitSwitchDarkMode()" :class="'switch-content text-2xl cursor-pointer' + (darkMode ? ' after:bg-white' : ' after:bg-black')"></div>
        </label>
    </div>
</template>

<script>
    export default {
        props:{
            darkMode: Boolean
        },
        methods: {
            emitSwitchDarkMode(){
                this.$emit('switchDarkMode');
            }
        }
    }
</script>