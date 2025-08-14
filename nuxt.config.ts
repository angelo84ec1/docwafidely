// https://nuxt.com/docs/api/configuration/nuxt-config
import lottie from "lottie-web";
import { defineNuxtModule } from "nuxt";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  vite: {
    plugins: [
      svgLoader({
        /* ... */
      }),
    ],
  },

  ssr: false,
  
  // 🔧 CONFIGURACIÓN DE PUERTO PARA WAPPIAD
  nitro: {
    port: 3002,
    host: "0.0.0.0"
  },

    // Hooks para errores (opcional)
    hooks: {
      "render:errorMiddleware": (app) => {
        app.use((error, req, res, next) => {
          console.log("Error capturado:", error)
          next(error)
        })
      }
    },

  app: {
    head: {
      titleTemplate: "%s - Wafidely",
      title: "Wafidely - Sistema agendamiento de citas web y whatsapp - Confirmacion asistencia por whatsapp - Sistema recordatorio vacunas en whatsapp mascotas - Api Whatsapp para N8N - Bot en Whatsapp - Agentes Inteligencia Artifical - AI Agent USA - Agencias creacion Agentes IA en Republica Dominicana - Agencias creacion Agentes IA en México ",
      htmlAttrs: {
        lang: "es",
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Desarrollo de web a la medida - Desarrollo de Apps - Entrenamiento de Agentes IA - Programadores Full Stack - Desarrollo Sistemas SAAS - Arquitectos de Cloud.",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "keywords",
          content:
            "Desarrollo web - Desarrollo apps- Entrenamiento de agentes con inteligencia artificial - Bots en whatsapp - Sistema de agendamiento de citas con agentes de IA en whatsapp",
        }, // Palabras clave añadidas
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
        },
      ],
      script: [
        {
          src: "https://www.paypal.com/sdk/js?client-id=test&currency=USD",
          // type: "text/javascript",
          async: true,
        },
      ],
    },
  },




// Sitemap configuration
sitemap: {
  hostname: "https://docs.ai.wafidely.com/",
  gzip: true,
  routes: async () => {
    // Rutas estáticas
    const staticRoutes = [
      {
        url: "/",
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date()
      },
      {
        url: "/ai",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date()
      }
     
    ]
    
    // Rutas dinámicas (ejemplo)
    let dynamicRoutes = []
    try {
      // Si tienes una API para blog posts
      // const posts = await $fetch("https://tu-api.com/posts")
      // dynamicRoutes = posts.map(post => ({
      //   url: `/blog/${post.slug}`,
      //   changefreq: "weekly",
      //   priority: 0.6,
      //   lastmod: new Date(post.updatedAt)
      // }))
    } catch (error) {
      console.log("Error fetching dynamic routes for sitemap:", error)
    }
    
    return [...staticRoutes, ...dynamicRoutes]
  },
  defaults: {
    changefreq: "daily",
    priority: 0.8,
    lastmod: new Date()
  }
},



  runtimeConfig: {
    public: {
      baseURL: process.env.STRAPI_URL || "http://localhost:1337",
      MAILTO: process.env.MAILTO || "websecuador.net@gmail.com",
      pagomedioToken: process.env.PAGOMEDIO_TOKEN,
      gtmContainerId: process.env.NUXT_PUBLIC_GTM_CONTAINER_ID, // set NUXT_PUBLIC_GTM_CONTAINER_ID in .env file
      GOOGLE_MAPS_API: "AIzaSyAMQ-DzRcCKRrOWJWjPkPSTUHqwyQkyVH8",
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/reset.css",
    "~/assets/css/global.css",
    "~/assets/css/main.css",
    "~/assets/scss/_swiper.scss",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    "~/plugins/toastification.client.ts",
    // "~/plugins/pinia-persist.client.ts",
    // "@/plugins/vue-google-map.client.ts",
  ],

  components: true,

  // 🚨 MÓDULOS - SE REMOVIÓ "nuxt-proxy" TEMPORAL
  modules: [
    "@pinia/nuxt", 
    "@sidebase/nuxt-pdf", 
    // "@nuxtjs/sitemap",
    // "nuxt-proxy", // ❌ COMENTADO TEMPORALMENTE
    "@nuxtjs/i18n"
   



  ],

  // 🔧 CONFIGURACIÓN DE PROXY (si la necesitas más adelante)
  // proxy: {
  //   "/api/": {
  //     target: "http://localhost:8080", // Tu servidor API
  //     changeOrigin: true,
  //     pathRewrite: {
  //       "^/api/": "/api/"
  //     }
  //   }
  // },

  swiper: {},

  build: {
    transpile: ["defu"],
  },

  i18n: {
    legacy: false,
    locale: "es",
    fallbackLocale: "es",
    // NO lazy ni langDir
    vueI18n: "./i18n.config.ts", // archivo con defineI18nConfig que exporta los mensajes
  },


  carousel: {
    prefix: "MyPrefix",
  },

  router: {
    options: {
      sensitive: false,
      linkActiveClass: "drawer__link--active",
    },
  },
});