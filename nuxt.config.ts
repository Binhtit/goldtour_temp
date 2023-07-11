// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
  ],

  typescript: {
    shim: false,
  },

  ssr: true,

  css: [
    '@/assets/styles/main.scss',
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue-3/dist/bootstrap-vue-3.css'
  ],
  runtimeConfig: {
    public: {
      KEY_GG_ANALYTICS: process.env.KEY_GG_ANALYTICS,
      URL_TELE: process.env.URL_TELE,
      CHAT_ID: process.env.CHAT_ID,
      PAGE_ID: process.env.PAGE_ID
    }
  },
  app: {
    head: {
      title: 'Goldtour Việt Nam: Đặt vé máy bay, du lịch trong nước, VISA, phòng khách sạn giá rẻ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Goldtour Việt Nam với Hơn 12.000 khách sạn trong nước đang có giá cực tốt, ưu đãi vé máy bay và combo du lịch giá rẻ. Đặt trực tuyến hoặc gọi ngay hotline 0777427772 - 0936754789.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'khách sạn, dịch vụ visa, đặt phòng khách sạn, vé máy bay, đặt vé máy bay giá rẻ, combo du lịch, du lịch giá rẻ, đặt phòng theo giờ, quickstay, du lịch đồng giá.'
        },
        {
          property: 'og:title',
          content: 'Goldtour Việt Nam - Đặt vé máy bay, VISA, phòng khách sạn giá rẻ'
        },
        {
          property: 'og:image',
          content: '/og-img-logo.png'
        }
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-F6ZN84D3K7',
          async: true,
        }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,400;1,700&family=Big+Shoulders+Text:wght@100;200;300;400;500;600;700;800;900&display=swap' }
      ],
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' }
      ]
    }
  },

  tailwindcss: {
    // Options
  },

  components: [
    { path: '~/components', extensions: ['vue'] },
    { path: '~/components/layouts', extensions: ['vue'] },
    { path: '~/components/pages/Home', extensions: ['vue'] },
  ],
})
