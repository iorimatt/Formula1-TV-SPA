import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router/index'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    //User Login States   
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg",
    userProfile: 'Meu Perfil',
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
    categoriesMenu: [
      { name: "F1™", link: "f1" },
      { name: "F2™", link: "f2" },
      { name: "F3™", link: "f3" },
    ],
    // Data for Home.vue
    homeBanners: [
      {
        id: 0,
        name: "Formula 1 Sprint Race - São Paulo",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004831-283d7c1e-a0a8-4d06-8d7f-21d9962c410d?w=1328&h=569&q=HI&o=L",
        linkTo: "/video1",
        videoDuration: "00:23:10",
      },
      {
        id: 1,
        name: "Haas Ganha novo patrocinador",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004833-56c856fa-7407-43b9-93da-7949172a6737?w=1328&h=569&q=HI&o=L",
        linkTo: "/video2",
        videoDuration: "00:32:05",
      },
      {
        id: 2,
        name: "Aquecimento para o fim de semana",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004944-ab2d95ad-a558-4893-aad9-609d080ef16f?w=1328&h=569&q=HI&o=L",
        linkTo: "/video3",
        videoDuration: "00:10:54",
      },
      {
        id: 3,
        name: "F1 Team Profile - Aston Martin ",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004830-1edcf275-4406-4888-b20a-639992bae5bc?w=1328&h=569&q=HI&o=L",
        linkTo: "/video4",
        videoDuration: "00:08:20",
      },
    ],
    homePromoBanners: [
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
        id: 0,
        name: "WEEKEND DEBRIEF - SÃO PAULO",
        tag: "00:26:01",
        linkTo: "content1",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004973-22faa856-391b-43ea-b4d6-436e5f53e12d?w=354&h=199&q=HI&o=L",
      },
      {
        id: 1,
        name: "ANÁLISE DE JOLYON PALMER - SÃO PAULO",
        tag: "00:16:01",
        linkTo: "content2",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004972-60dd10a6-360e-4c3a-a585-e3ec8367c4a4?w=354&h=199&q=HI&o=L",
      },
      {
        id: 2,
        name: "TOP 10 ONBOARDS - SÃO PAULO",
        tag: "00:43:01",
        linkTo: "content3",
        img: "https://f1tv.formula1.com/image-resizer/image/1000004963-30580560-896f-4add-80fc-1723848d3fb3?w=354&h=199&q=HI&o=L",
      },
    ],
    //Data For Schedules
    raceList: [],
    raceName: '',
    roundsRemaining: 3,
    //Login fields
    userEmail: '',
    userPassword: '',
    //Data for Errors
    error: '',
    loading: false,
    errorLabel: false,
  },
  //getters 
  getters: {
    auth(state) {
      return state.isLogged
    },
    loading(state) {
      return state.loading
    },
    errorLabel(state) {
      return state.errorLabel
    }
  },
  //mutations
  mutations: {
    SET_USERDATA(state, payload) {
      state.userEmail = payload.user
      state.userPassword = payload.password
    },
    SET_AUTH(state, res) {
      if (res === 200) {
        state.isLogged = !state.isLogged
        router.push('/')
      }
    },
    LOG_OUT(state) {
      state.isLogged = !state.isLogged
      localStorage.removeItem('token')
    },
    SET_RACELIST(state, race) {
      state.raceList = race
    },
    SET_LOADING(state, loadStatus) {
      state.loading = loadStatus
    },
    SET_ERROR(state, error) {
      state.error = error
      state.errorLabel = true
    },
  },
  //actions 
  actions: {
    getRaceList({ commit }) {
      axios
        .get("http://ergast.com/api/f1/current.json")
        .then((res) => {
          commit('SET_RACELIST', res.data.MRData.RaceTable.Races)
        }).catch((res) => {
          let error = res.toString()
          commit('SET_ERROR', error)
          router.push('/error')
        })
    },
    userAuth({ commit }) {
      commit('SET_LOADING', true)
      axios
        .post('https://click-up-api.azurewebsites.net/api/login', {
         
          email: this.state.userEmail,
          password: this.state.userPassword,
        }).then((res) => {
          const token = res.data.data.accessToken
          sessionStorage.setItem('token', token)
          commit('SET_AUTH', res.status)
          commit('SET_LOADING', false)
        }).catch((res) => {
          let error = res
          commit('SET_ERROR', error.response.data.errors)
          commit('SET_LOADING', false)
        })
    },
    logOut({ commit }) {
      commit('LOG_OUT')
    },
    logIn({ commit }) {
      commit('SET_AUTH', 200)
    }
  },
},
)
export { store }