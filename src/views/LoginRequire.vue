<template>
  <b-container class="d-flex justify-content-center">
    <b-col col="2"></b-col>

    <b-col col="8" class="mb-5 mt-5">
      
    
      <b-row>
        <h4  class="f1-font text-center text-white" style="transition-delay:1.5s">
          Conteúdo disponível somente para membros
        </h4>
      </b-row>
       

      <b-row class="d-flex justify-content-center">
        <v-lottie-player
          name="scooterAnim"
          loop
          :animationData="require('../animations/lock.json')"
        />
      </b-row>

      <b-row class="d-flex justify-content-center">
        

<b-col col="6" class="d-flex justify-content-center">
        <b-button
          size="lg"
          variant="danger"
          class="justify-center"
          :to="{ path: '/login' }"
          >SE INSCREVA</b-button
        >
</b-col>

      </b-row>
    </b-col>

    <b-col col="2"></b-col>
  </b-container>
</template>

<script>
import VueLottiePlayer from "vue-lottie-player";

export default {
  components: {
    vLottiePlayer: VueLottiePlayer,
  },


  data() {
    return {
    show: true
    }
  },
};
</script>

<style>
</style>