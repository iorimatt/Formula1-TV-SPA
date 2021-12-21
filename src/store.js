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

    

    homeBanners: [],
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
   
    //Data For Schedules
    raceList: [],
    raceName: '',
    roundsRemaining: 20,
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
  
    banner(state) {
return state.homeBanners

    },

    errorLabel(state) {
      return state.errorLabel
    },

    racelist(state){

      return state.raceList

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
      sessionStorage.removeItem('token')
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

    SET_BANNER(state, banners){

        state.homeBanners = banners

    }

  },
  //actions 
  actions: {


    getBannerHome({commit}){

      axios.get("http://localhost:3000/bannerHome")
      .then((res)=>{
        
        commit('SET_BANNER', res.data)
      }).catch((res)=>{
        let error = res.toString()
        commit('SET_ERROR', error)
        router.push('/error')
      })
    },


    getRaceList({ commit }) {
      axios
        .get("http://localhost:3000/racelist")
        .then((res) => {
           commit('SET_RACELIST', res.data)
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