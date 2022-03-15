<template>
    <div id="contact" class="h-screen grid grid-cols-7 gap-4">
        <div class="mx-20 pt-24 col-span-4">
            <h1 class="text-7xl font-extrabold">Contacto</h1>
            <p class="mt-8 text-xl font-light text-justify text-gray-500">¿Tienes en mente algún proyecto? No dudes en ponenerte en contacto conmigo.</p>
            <div class="grid grid-cols-3 gap-4 mt-8">
                <div class="bg-gray-50 p-4 rounded-md">
                    <h5 class="text-xl font-medium">Teléfono</h5>
                    <p class="font-light text-md">+51 999 888 999</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-md">
                    <h5 class="text-xl font-medium">Correo</h5>
                    <p class="font-light text-md">romariosc15@outlook.com</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-md">
                    <h5 class="text-xl font-medium">Ubicación</h5>
                    <p class="font-light text-md">Ilo, Perú</p>
                </div>
            </div>
            <div class="mt-8">
                <div>
                    <img class="w-8 h-8 inline-block" src="~/assets/img/social-medias/linkedin.png" />
                    <a href="https://www.linkedin.com/in/romariosarmiento/" class="inline-block ml-4 font-light">Jaime Romario Sarmiento</a>
                </div>
            </div>
        </div>
        <div class="col-span-3 flex items-center justify-center px-12">
            <img class="w-full h-fit-content rounded-md" src="~/assets/img/contact/main.jpg" />
        </div>
    </div>
</template>

<script>

export default {
    props: {
    },
    data: function () {
        return {
            
        }
    },
    components: {
    },
    methods: {
        
    }
}
</script>