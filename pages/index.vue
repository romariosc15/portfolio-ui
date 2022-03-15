<template>
    <div class="grid grid-cols-7">
        <div>
            <Sidebar />
        </div>
        <div class="content col-span-6 scroll-smooth overflow-y-auto h-screen">
            <Home />
            <About />
            <Portfolio />
            <Contact />
        </div>
    </div>
    
</template>
<script>
  export default {
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