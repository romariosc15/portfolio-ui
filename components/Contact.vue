<template>
    <div id="contact" class="h-screen md:grid md:grid-cols-5 lg:grid-cols-7 lg:gap-2 xl:gap-4">
        <div class="md:mx-12 lg:mr-0 lg:ml-12 xl:ml-20 pt-24 md:col-span-3 lg:col-span-4 xl:col-span-4">
            <h1 class="md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">Contacto</h1>
            <p class="mt-8 md:text-lg lg:text-lg xl:text-xl font-light text-justify text-gray-500">¿Tienes en mente algún proyecto? No dudes en ponerte en contacto conmigo.</p>
            <div class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
                <div class="md:w-8/12 lg:w-full bg-gray-50 p-4 rounded-md">
                    <h5 class="md:text-md lg:text-lg xl:text-xl font-medium">Teléfono</h5>
                    <p class="font-light md:text-sm lg:text-sm xl:text-md">+51 999 888 999</p>
                </div>
                <div class="md:w-8/12 lg:w-full bg-gray-50 p-4 rounded-md">
                    <h5 class="md:text-md lg:text-lg xl:text-xl font-medium">Correo</h5>
                    <p class="font-light md:text-sm lg:text-sm xl:text-md">romariosc15@outlook.com</p>
                </div>
                <div class="md:w-8/12 lg:w-full bg-gray-50 p-4 rounded-md">
                    <h5 class="md:text-md lg:text-lg xl:text-xl font-medium">Ubicación</h5>
                    <p class="font-light md:text-sm lg:text-sm xl:text-md">Ilo, Perú</p>
                </div>
            </div>
            <p class="mt-8 lg:text-md lg:text-lg xl:text-xl font-light text-justify text-gray-500">Encuentrame también por redes sociales.</p>
            <div class="mt-4 lg:mt-8 space-y-6">
                <div>
                    <img class="md:w-7 lg:w-8 md:h-7 lg:h-8 inline-block" src="~/assets/img/social-medias/linkedin.png" />
                    <a target="_blank" href="https://www.linkedin.com/in/romariosarmiento/" class="md:text-sm lg:text-md inline-block ml-4 font-light hover:underline">Jaime Romario Sarmiento</a>
                </div>
                <div>
                    <img class="md:w-7 lg:w-8 md:h-7 lg:h-8 inline-block" src="~/assets/img/social-medias/whatsapp.png" />
                    <a target="_blank" href="https://wa.me/+51999888999" class="md:text-sm lg:text-md inline-block ml-4 font-light hover:underline">+51 999 888 999</a>
                </div>
            </div>
        </div>
        <div class="md:col-span-2 lg:col-span-3 xl:col-span-3 flex items-center justify-center md:pr-12 lg:pr-8 lg:pl-6 xl:px-12">
            <img class="lg:w-full h-fit-content rounded-md" src="~/assets/img/contact/main.jpg" />
        </div>
    </div>
</template>