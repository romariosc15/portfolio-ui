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
            <Portfolio />
            <Contact />
        </div>
    </div>
    
</template>
<script>
  export default {
    setup() {
        const currentPath = usePath();
        return {
            currentPath
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
            let h = window.innerHeight;
            if (scrollTop < h - 300){
                this.currentPath = '#home';
            }else if(scrollTop < (h*2) - 300){
                this.currentPath = '#about';
            }else if(scrollTop < (h*3) - 300){
                this.currentPath = '#portfolio';
            }else if(scrollTop >= (h*3) - 300){
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