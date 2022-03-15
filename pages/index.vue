<template>
    <div class="grid grid-cols-7">
        <div>
            <Sidebar />
        </div>
        <div id="content" class="content col-span-6 scroll-smooth overflow-y-auto h-screen" v-on:scroll="handleScroll()">
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
            if (scrollTop < 969){
                this.currentPath = '#home';
            }else if(scrollTop < 1938){
                this.currentPath = '#about';
            }else if(scrollTop < 2907){
                this.currentPath = '#portfolio';
            }else if(scrollTop === 2907){
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