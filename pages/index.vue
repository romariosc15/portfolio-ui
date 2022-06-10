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
            var scrollTop = document.getElementById('content').scrollTop;
            if (scrollTop < 969 - 200){
                this.currentPath = '#home';
            }else if(scrollTop < 1938 - 200){
                this.currentPath = '#about';
            }else if(scrollTop < 2907 - 200){
                this.currentPath = '#portfolio';
            }else if(scrollTop >= 2907 - 200){
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