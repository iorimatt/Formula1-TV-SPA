<template>
  <div>
    <!----main banner--->
    <b-container fluid class="p-0">
      <div class="row buttons-slide d-flex">
        <div class="col-6">
          <b-button variant="transparent" @click="showPrev()">
            <b-icon-chevron-left
              variant="white"
              style="width: 60px; height: 60px"
            ></b-icon-chevron-left>
          </b-button>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <b-button variant="transparent" @click="showNext()">
            <b-icon-chevron-right
              variant="white"
              style="width: 60px; height: 60px"
            ></b-icon-chevron-right>
          </b-button>
        </div>
      </div>

      <div
        style="background-color: #15151e"
        class="d-flex justify-content-center"
      >
        <div class="container-fluid d-flex" style="height: 45vh">
          <VueSlickCarousel class="banner" v-bind="setting" ref="carousel">
            <div
              v-bind:style="{ 'background-image': 'url(' + banner.img + ')' }"
              class="banner bg-primary text-white col-8 d-flex align-items-end"
              v-for="banner in Banners"
              :key="banner.name"
            >
              <div class="container-fluid">
                <div>
                  <div class="row">
                    <div class="interactive-poster-gradient p-1">
                      <div class="row d-flex justify-content-center">
                        <div class="col-6 p-1 mt-3 text-white">
                          <div class="row align-items-center">
                            <div class="col-2">
                              <b-button class="button-play" :to="banner.linkTo"
                                ><b-icon-play
                                  class="mt-4"
                                  scale="3"
                                ></b-icon-play>
                              </b-button>
                            </div>

                            <div class="col-10">
                              <h2 class="f1-font mt-5">{{ banner.name }}</h2>
                              <div>
                                <div class="list-inline">
                                  <p class="list-inline-item video-tag">
                                    <b-icon-clock class="me-2"></b-icon-clock
                                    >{{ banner.videoDuration }}
                                  </p>
                                  <p class="list-inline-item video-tag">
                                    | ESPECIAL
                                  </p>
                                  <p class="list-inline-item video-tag">
                                    | FÓRMULA 1
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </b-container>

    <!----promo banner--->

    <b-container class="promo-content d-flex justify-content-center">
      <b-row class="d-flex justify-content-center">
        <h3 class="d-flex justify-content-center f1-font text-white">
          Assine a F1TV
        </h3>

        <b-button class="col-4 m-3" variant="danger"> SE INSCREVA</b-button>
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
        <VueSlickCarousel v-bind="settings" class="mt-5 mb-5 col-6">
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
        <b-col v-for="content in Contents" :key="content.name">
          <b-card bg-variant="dark" class="text-white p-0">
            <div class="row d-flex align-items-end">
              <b-card-img class="p-0 m-0" :src="content.img"> </b-card-img>

              <b-button :to="content.link" class="button-play position-absolute"
                ><b-icon-play scale="3" class="mt-4"></b-icon-play
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
        <b-col v-for="banner in Banners" :key="banner.name">
          <b-card bg-variant="dark" class="text-white p-0">
            <div class="row d-flex align-items-end">
              <b-card-img class="p-0 m-0" :src="banner.img"> </b-card-img>

              <b-button
                :to="banner.linkTo"
                class="button-play position-absolute"
                ><b-icon-play scale="3" class="mt-4"></b-icon-play
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
        centerMode: true,
        slidesToShow: 1,
        speed: 500,
        arrows: false,
        rows: 1,
      },

      //data
      Contents: this.$store.state.homeCardContents,
      Banners: this.$store.state.homeBanners,
      PromoBanners: this.$store.state.homePromoBanners,
    };
  },

  methods: {
    showNext() {
      this.$refs.carousel.next();
    },

    showPrev() {
      this.$refs.carousel.prev();
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
