<template>
  <div>
    <!----main banner--->
    <b-container fluid class="p-0">
     
     
      
      <b-modal hide-footer id="only-subs">
        <b-row class="justify-content-center f1-font text-center mb-3 mt-3">
          <h5>Inscreva-se para assistir</h5></b-row
        >
        <b-row class="justify-content-center text-center titillium-regular">
          <p>
            Você precisa ter uma assinatura F1 para assistir a conteúdos
            exclusivos Já é titular de uma conta F1? Entrar
          </p></b-row
        >
        <b-row class="justify-content-center">
          <b-col cols="4"></b-col>
          <b-col cols="8" class="p-3">
            <b-button variant="danger" :to="{ path: '/login' }"
              >SE INSCREVA</b-button
            >
          </b-col>
        </b-row>
      </b-modal>



      <div
        style="background-color: #15151e"
        class="row d-flex justify-content-center "
      >

      
        <b-carousel
          id="carousel-fade"
          fade
          indicators
          controls="true"
          img-width="1024"
          img-height="280"
          
        >

         
          <b-carousel-slide
         
            v-for="content in BannerList"
            :key="content.name"
            :img-src="content.img"
          >

          
            <b-container>
              <b-row>
                <b-col cols="4">
                  <b-button
                    @click="authVerify(content.name)"
                    class="button-play position-absolute"
                    ><b-icon-play scale="3" class="mt-1"></b-icon-play
                  ></b-button>
                </b-col>

                <b-col cols="8">
                  <h3 class="f1-font text-start">{{ content.name }}</h3>

                  <div class="row">

                
                    <p class="text-start video-tag">
                          <b-icon-clock></b-icon-clock>
                      {{ content.videoDuration }} 
                    </p>

                  </div>
                </b-col>
              </b-row>
            </b-container>

             
           

          </b-carousel-slide>
    

        </b-carousel>

           <b-row class=" interactive-poster-gradient" style="position: relative; z-index:1;">TESTEaaaas</b-row>
      </div>
     
     
    </b-container>

    <!----promo banner--->



    <b-container class="promo-content d-flex justify-content-center">
      <b-row class="d-flex justify-content-center">
        <h3 class="d-flex justify-content-center f1-font text-white">
          Assine a F1TV
        </h3>
        <b-button class="col-4 m-3" variant="danger" :to="{ path: '/login' }">
          SE INSCREVA</b-button
        >
        <h3 class="d-flex justify-content-center text-white">
          TODA A F1 AO VIVO
        </h3>
      </b-row>
    </b-container>
    <b-container>
      <b-row
        class="container promo-carousel d-flex justify-content-center"
        style="height: 45vh"
      >
        <VueSlickCarousel class="mt-5 mb-5 col-6">
          <div
            v-for="promo in PromoBanners"
            :key="promo.name"
            v-bind:style="{
              'background-image': 'url(' + promo.img + ')',
            }"
            class="promo-banners row"
          ></div>
        </VueSlickCarousel>
      </b-row>
    </b-container>
    <!----three cards content--->
    <b-container class="mt-5 mb-5">
      <b-row>
        <b-col v-for="content in BannerList" :key="content.name">
          <b-card bg-variant="dark" class="text-white p-0">
            <div class="row d-flex align-items-end">
              <b-card-img class="p-0 m-0" :src="content.img"> </b-card-img>
              <b-button
                @click="authVerify(content.name)"
                class="button-play position-absolute"
                ><b-icon-play scale="3" class="mt-1"></b-icon-play
              ></b-button>
            </div>
            <div class="row">
              <b-card-header>{{ content.tag }}</b-card-header>
              <b-card-title>{{ content.name }}</b-card-title>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!--four cards content--->
    <b-container class="mt-5 mb-5">
      <h3 class="text-white f1-font mt-5 mb-3">AS MELHORES CORRIDAS</h3>
      <b-row>
        <b-col v-for="banner in BannerList" :key="banner.name">
          <b-card bg-variant="dark" class="text-white p-0">
            <div class="row d-flex align-items-end">
              <b-card-img class="p-0 m-0" :src="banner.img"> </b-card-img>
              <b-button
                @click="authVerify(banner.id)"
                class="button-play position-absolute"
                ><b-icon-play scale="3" class="mt-1"></b-icon-play
              ></b-button>
            </div>
            <div class="row">
              <b-card-header>{{ banner.videoDuration }}</b-card-header>
              <b-card-title>{{ banner.name }}</b-card-title>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import router from "../router/index";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Home",
  components: {
    VueSlickCarousel,
  },
  data: function () {
    return {
      //banner slick config
      setting: {
        centerMode: false,
        slidesToShow: 1,
        speed: 500,
        arrows: false,
        rows: 1,
      },
      //data

      Contents: this.$store.state.homeCardContents,
      PromoBanners: this.$store.state.homePromoBanners,
      isLogged: this.$store.state.isLogged,
    };
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
    authVerify(id) {
      const banner = this.$store.getters.banner;
      var position = "";

      if (this.isLogged === false) {
        return this.$bvModal.show("only-subs");
      } else
        position = banner
          .map(function (e) {
            return e.name;
          })
          .indexOf(id);
      router.push(banner[position].linkTo.toString());
    },
  },

  computed: {
    BannerList() {
      return this.$store.getters.banner;
    },
  },
};
</script>
<style scoped>


.bg-slide {
  background-image: url("https://cdn.wallpapersafari.com/8/77/LH7RTv.jpg");
  background-size: cover;
}
.banner {
  height: 60vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0px;
  padding: 0px;
}
.buttons-slide {
  position: absolute;
  top: 35vh;
  z-index: 1;
  width: 100%;
}
.interactive-poster-gradient {
 
  background-image: linear-gradient(
    to bottom,
    rgba(21, 21, 30, 0),
    #15151e 85%
  );
  color: transparent;
}
.button-play {
  background-color: red;
  opacity: 0.6;
  border-radius: 0px 40px 0px 0px;
  height: 84px;
  width: 84px;
  border-style: none;
}
.button-play:hover {
  background-color: red;
  opacity: 1;
}
.promo-content {
  margin-top: 10%;
}
.promo-banners {
  background-size: contain;
  height: 40vh;
  background-repeat: no-repeat;
}
</style>
