<template>
    <div class="flex items-center">
        <label :class="'mr-6' + (darkMode ? ' text-white' : '')" for="dark-mode">Modo oscuro</label>
        <label class="switch flex items-center">
            <input id="dark-mode" type="checkbox" />
            <div v-on:click="switchDarkMode()" :class="'switch-content text-2xl'  + (darkMode ? ' after:bg-white' : ' after:bg-black')"></div>
        </label>
    </div>
</template>

<script>
    export default {
        setup() {
            const darkMode = useDarkMode();
            return {
                darkMode
            }
        },
        methods: {
            switchDarkMode(){
                this.darkMode = !this.darkMode;
            }
        }
    }
</script>

<style scoped>
    .switch input {
        display: none;
    }
    .switch .switch-content {
        position: relative;
        display: inline-block;
        width: 2em;
        height: 1em;
    }
    .switch .switch-content::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: inline-block;
        content: '';
        border-radius: 0.5em;
        background: rgb(156, 163, 175);
        opacity: 0.3;
        transition: opacity 0.2s;
    }
    .switch .switch-content::after {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        content: '';
        width: 1em;
        height: 1em;
        border-radius: 0.5em;
        transition: transform 0.2s;
    }
    .switch input:checked + .switch-content::before {
        opacity: 0.8;
    }
    .switch input:checked + .switch-content::after {
        transform: translateX(100%);
    }
</style>