<template>
    <div :class="darkMode ? 'bg-black' : 'bg-white'">
        <Transition name="fade">
            <div :class="'h-screen bg-gray-600'" v-if="!loading">
                <Loading />
            </div>
        </Transition>
        <div class="lg:grid lg:grid-cols-12 xl:grid-cols-9 2xl:grid-cols-6">
            <div class="hidden lg:block lg:col-span-3 xl:col-span-2 2xl:col-span-1">
                <Sidebar />
            </div>
            <div id="content" class="content scroll-smooth overflow-y-auto h-screen lg:col-span-9 xl:col-span-7 2xl:col-span-5" v-on:scroll="handleScroll()">
                <div class="block lg:hidden">
                    <Navbar />
                </div>
                <Home />
                <About />
                <Portfolio :swiper-modules="modules" />
                <Contact />
            </div>
        </div>
    </div>
    
</template>
<script>
    import { Pagination } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/pagination';
    export default {
        setup() {
            const currentPath = usePath();
            const darkMode = useDarkMode();
            const loading = useLoading();
            return {
                currentPath,
                darkMode,
                loading,
                modules: [Pagination],
            }
        },
        beforeMount () {
            document.getElementById('content').addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            document.getElementById('content').removeEventListener('scroll', this.handleScroll);
        },
        mounted () {
            const localStorageDarkMode = localStorage.getItem('darkMode');
            if(localStorageDarkMode==='true'){
                this.darkMode = Boolean(localStorageDarkMode);
            }
        },
        methods: {
            handleScroll(){
                let scrollTop = document.getElementById('content').scrollTop;
                let homeHeight = document.getElementById('home').offsetHeight;
                let aboutHeight = document.getElementById('about').offsetHeight;
                let portfolioHeight = document.getElementById('portfolio').offsetHeight;
                let contactHeight = document.getElementById('contact').offsetHeight;
                if (scrollTop < (homeHeight/2)){
                    this.currentPath = '#home';
                }else if(scrollTop < (homeHeight + aboutHeight/2)){
                    this.currentPath = '#about';
                }else if(scrollTop < (homeHeight + aboutHeight + portfolioHeight/2) - (contactHeight/4)){
                    this.currentPath = '#portfolio';
                }else if(scrollTop >= (homeHeight + aboutHeight + portfolioHeight/2) - (contactHeight/4)){
                    this.currentPath = '#contact';
                }
            }
        },
        head() {
            return {
                title: "Romario Sarmiento - Frontend",
                meta: [
                    {
                        hid: "apple-mobile-web-app-title",
                        property: "application-name",
                        content: "Jaime Romario Sarmiento - Portafolio",
                    },
                    {
                        hid: "application-name",
                        property: "application-name",
                        content: "Jaime Romario Sarmiento - Portafolio",
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Sitio web personal destinado a mostrar parte de mi trabajo y mis habilidades como desarrollador web.'
                    },
                    {
                        hid: "og:title",
                        property: "og:title",
                        content: "Jaime Romario Sarmiento - Portafolio",
                    },
                    {
                        hid: "og:description",
                        property: "og:description",
                        content: "Sitio web personal destinado a mostrar parte de mi trabajo y mis habilidades como desarrollador web.",
                    },
                    {
                        hid: "og:image",
                        property: "og:image",
                        content: "~/assets/img/portfolio/portfolio.png",
                    },
                    {
                        hid: "og:type",
                        property: "og:type",
                        content: "website",
                    },
                    {
                        hid: "og:site_name",
                        property: "og:site_name",
                        content: "Jaime Romario Sarmiento - Portafolio",
                    },
                    {
                        hid: "og:locale",
                        property: "og:locale",
                        content: "es_ES",
                    },
                    {
                        hid: "og:url",
                        property: "og:url",
                        content: "https://www.romariosarmiento.com/",
                    }
                ]
            }
        }
    }
</script>