<template>
    <div class="lg:grid lg:grid-cols-10 xl:grid-cols-6">
        <div class="hidden lg:block lg:col-span-2 xl:col-span-1">
            <Sidebar />
        </div>
        <div id="content" class="content scroll-smooth overflow-y-auto h-screen lg:col-span-8 xl:col-span-5" v-on:scroll="handleScroll()">
            <div class="block lg:hidden">
                <Navbar />
            </div>
            <Home />
            <About />
            <Portfolio :swiper_modules="modules" />
            <Contact />
        </div>
    </div>
    
</template>
<script>
    // import Swiper core and required modules
    import { Pagination } from 'swiper';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    export default {
        setup() {
            const currentPath = usePath();
            return {
                currentPath,
                modules: [Pagination],
            }
        },
        beforeMount () {
            document.getElementById('content').addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            document.getElementById('content').removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll(){
                let scrollTop = document.getElementById('content').scrollTop;
                let homeHeight = document.getElementById('home').offsetHeight;
                let aboutHeight = document.getElementById('about').offsetHeight;
                let portfolioHeight = document.getElementById('portfolio').offsetHeight;
                let contactHeight = document.getElementById('contact').offsetHeight;
                //console.log(scrollTop, (homeHeight/2), (homeHeight + aboutHeight/2), (homeHeight + aboutHeight + portfolioHeight/2) - (contactHeight/4));
                //let h = window.innerHeight;
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
                title: "Romario Sarmiento",
                meta: [
                    {
                        hid: 'Inicio',
                        name: 'Inicio',
                        content: 'Sitio web personal destinado a mostrar parte de mi trabajo y mis habilidades como desarrollador web.'
                    }
                ]
            }
        }
    }
</script>