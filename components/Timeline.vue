<template>
    <ol class="">
        <li v-for="(value, index) in experience" v-bind:key="value.company">
            <div class="flex flex-row">
                <img class="w-8 md:w-10 lg:w-10 2xl:w-12 h-8 md:h-10 lg:h-10 2xl:h-12 object-cover rounded-full mb-2 lg:mb-2 2xl:mb-3 bg-gray-50" :src="`${value.image}`" alt="">
                <div class="ml-3.5 md:ml-3.5 lg:ml-3.5 2xl:ml-4">
                    <p class="text-xs lg:text-sm 2xl:text-lg font-bold">{{value.company}}</p>
                    <p class="text-xs lg:text-sm 2xl:text-base text-gray-500 font-light"><span class="font-normal">{{value.position}}</span> ({{value.period}})</p>
                </div>
            </div>
            <p :class="'ml-4 md:ml-5 lg:ml-5 2xl:ml-6 pl-7 md:pl-8 lg:pl-8 2xl:pl-9 pb-3 mb-3 text-xs lg:text-sm 2xl:text-lg font-light border-l-2 text-gray-600 text-justify' + (index===(experience.length-1) ? ' border-transparent' : ' border-gray-300')" v-html="value.description"></p>
        </li>
    </ol>
</template>

<script>


export default {
    props: {
        experience: Array
    },
    components: {
        
    },
    methods: {
        
    }
}
</script>