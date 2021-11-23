import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

state: {

        socialLinks: [{name:'facebook'}, {name:'twitter'}, {name:'instagram'}],
        generalLinks: [
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
              ]

}


})

export { store }