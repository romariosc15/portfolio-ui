import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
    head: {
        title: 'Jaime Romario Sarmiento - Frontend',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Sitio web personal destinado a mostrar parte de mi trabajo y mis habilidades como desarrollador web.' },
          { name: 'format-detection', content: 'telephone=no' },
          { hid: 'keywords', name: 'keywords', content: 'keywords,' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    buildModules: [
        
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: [
        '@/assets/css/main.css',
        '/assets/css/switch.css',
        '/assets/css/loader.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
})
