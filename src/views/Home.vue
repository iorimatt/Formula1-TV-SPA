<template>
  <div>
    <!----main banner--->
    <b-container fluid class="p-0" >
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

              <b-button :to="banner.linkTo" class="button-play position-absolute"
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
      Contents: [
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

      setting: {
        centerMode: true,
        slidesToShow: 1,
        speed: 500,
        arrows: false,
        rows: 1,
      },

      Banners: [
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

      PromoBanners: [
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

.card {
  border-radius: 15px;
  
}

.card-body {
  padding: 0px 12px;
}

.card-title {
  font-size: 16px;
  margin-bottom: 8vh;
}

.card-header {
  font-size: 14px;
  color: grey;
}

.card-play {
  position: relative;
  bottom: 16vh;
  right: 1.5vh;
  border-radius: 0px 20px 0px 0px;
  height: 70px;
  width: 70px;
}
</style>
