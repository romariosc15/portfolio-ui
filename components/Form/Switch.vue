<template>
    <div class="flex items-center">
        <label :class="'text-sm xl:text-base mr-6' + (darkMode ? ' text-white' : '')" for="dark-mode">Modo oscuro</label>
        <label class="switch flex items-center">
            <input id="dark-mode" type="checkbox" />
            <div ref="switchButton" @click="emitSwitch()" :class="'switch-content text-base lg:text-lg xl:text-xl 2xl:text-2xl cursor-pointer' + (darkMode ? ' after:bg-white' : ' after:bg-black')"></div>
        </label>
    </div>
</template>

<script>
    export default {
        props:{
            darkMode: Boolean
        },
        methods: {
            emitSwitch(){
                this.$emit('switch');
            }
        },
        mounted () {
            const localStorageDarkMode = localStorage.getItem('darkMode');
            if(localStorageDarkMode==='true'){
                this.$refs.switchButton.click();
            }
        },
    }
</script>