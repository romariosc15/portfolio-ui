import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
    head: {
        title: 'Romario Sarmiento - Sitio web personal',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
        '/assets/css/loading.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
})
