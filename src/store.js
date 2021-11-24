import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {


    //User Login States 

    userProfile: 'mateus franco',
    isLogged: false,

    //Data for GlobalFooter
    socialLinksFooter: [{ name: 'facebook' }, { name: 'twitter' }, { name: 'instagram' }],
    generalLinksFooter: [
      {
        name: "Termos e condições",
        link: "https://account.formula1.com/#/pt/subscription-terms",
      },
      {
        name: "Política de cookies",
        link: "https://account.formula1.com/#/pt/subscription-terms",
      },
      {
        name: "Preferências de cookie",
        link: "https://account.formula1.com/#/pt/subscription-terms",
      },
      {
        name: "Política de privacidade",
        link: "https://account.formula1.com/#/pt/subscription-terms",
      },
      {
        name: "Perguntas frequentes",
        link: "https://account.formula1.com/#/pt/subscription-terms",
      },
      {
        name: "Contato",
        link: "https://account.formula1.com/#/pt/subscription-terms",
      },
    ],

    // Data for GlobalHeader
    SubOptionsMenu: [
      { name: "2021 temporada", link: "/2021-season" },
      { name: "Horários", link: "/schedules" },
      { name: "Arquivo", link: "/archives" },
      { name: "Programas", link: "/shows" },
      { name: "Documentários", link: "/documentaries" },
    ],

    optionsMenu: [
      {
        name: "AUTHENTIC",
        link: "a",
      },
      {
        name: "STORE",
        link: "b",
      },
      {
        name: "TICKETS",
        link: "c",
      },
      {
        name: "HOSPITALITY",
        link: "d",
      },
      {
        name: "EXPERIENCES",
        link: "e",
      },
    ],
    categoriesMenu:  [
      { name: "F1™", link: "f1" },
      { name: "F2™", link: "f2" },
      { name: "F3™", link: "f3" },
    ],

    // Data for Home.vue

    homeBanners: [
      {
        name: "Formula 1 Sprint Race - São Paulo",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004831-283d7c1e-a0a8-4d06-8d7f-21d9962c410d?w=1328&h=569&q=HI&o=L",
        linkTo: "/video1",
        videoDuration: "00:23:10",
      },
      {
        name: "Haas Ganha novo patrocinador",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004833-56c856fa-7407-43b9-93da-7949172a6737?w=1328&h=569&q=HI&o=L",
        linkTo: "/video2",
        videoDuration: "00:32:05",
      },
      {
        name: "Aquecimento para o fim de semana",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004944-ab2d95ad-a558-4893-aad9-609d080ef16f?w=1328&h=569&q=HI&o=L",
        linkTo: "/video2",
        videoDuration: "00:10:54",
      },
      {
        name: "F1 Team Profile - Aston Martin ",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004830-1edcf275-4406-4888-b20a-639992bae5bc?w=1328&h=569&q=HI&o=L",
        linkTo: "/video2",
        videoDuration: "00:08:20",
      },
    ],

    homePromoBanners:  [
      {
        img: "https://ott-img.formula1.com/subscription/ProImagesNoBG/live-nocut.png?w=690&h=388&q=HI&o=L",
      },
      {
        img: "https://ott-img.formula1.com/subscription/ProImagesNoBG/your-way.png?w=690&h=388&q=HI&o=L",
      },
      {
        img: "https://ott-img.formula1.com/subscription/ProImagesNoBG/shows.png?w=690&h=388&q=HI&o=L",
      },
    ],

    homeCardContents: [
      {
        name: "WEEKEND DEBRIEF - SÃO PAULO",
        tag: "00:26:01",
        link: "content1",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004973-22faa856-391b-43ea-b4d6-436e5f53e12d?w=354&h=199&q=HI&o=L",
      },
      {
        name: "ANÁLISE DE JOLYON PALMER - SÃO PAULO",
        tag: "00:16:01",
        link: "content2",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004972-60dd10a6-360e-4c3a-a585-e3ec8367c4a4?w=354&h=199&q=HI&o=L",
      },
      {
        name: "TOP 10 ONBOARDS - SÃO PAULO",
        tag: "00:43:01",
        link: "content3",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004963-30580560-896f-4add-80fc-1723848d3fb3?w=354&h=199&q=HI&o=L",
      },
    ], 
    

  }


})

export { store }