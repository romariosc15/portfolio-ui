<template>
    <ol class="">
        <li v-for="(value, index) in experience" v-bind:key="value.company">
            <div class="flex flex-row">
                <img :class="'w-8 md:w-10 lg:w-10 2xl:w-12 h-8 md:h-10 lg:h-10 2xl:h-12 object-cover rounded-full mb-2 lg:mb-2 2xl:mb-3 transition-colors duration-300' + (darkMode ? ' bg-white' : ' bg-gray-50')" :src="`${value.image}`" alt="">
                <div class="ml-3.5 md:ml-3.5 lg:ml-3.5 2xl:ml-4">
                    <p class="text-sm md:text-sm lg:text-sm 2xl:text-lg font-bold">{{value.company}}</p>
                    <p :class="'text-xs md:text-sm lg:text-sm 2xl:text-base' + (darkMode ? ' text-gray-700' : ' text-gray-500')"><span class="font-normal">{{value.position}}</span> ({{value.period}})</p>
                </div>
            </div>
            <p :class="'ml-4 md:ml-5 lg:ml-5 2xl:ml-6 pl-7 md:pl-8 lg:pl-8 2xl:pl-9 pb-3 mb-3 text-xs md:text-sm lg:text-base 2xl:text-lg border-l-2 text-justify' + (darkMode ? ' text-gray-800' : ' text-gray-600') + (index===(experience.length-1) ? ' border-transparent' : ' border-gray-200')" v-html="value.description"></p>
        </li>
    </ol>
</template>

<script>


export default {
    props: {
        darkMode: Boolean,
        experience: Array
    }
}
</script>