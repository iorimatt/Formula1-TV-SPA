<template>
  <div>
    <mq-layout mq="mobile">
      <app-ad></app-ad>
    </mq-layout>
    <mq-layout mq="desktop">
      <global-header></global-header>
      <router-view />
      <global-footer></global-footer>
    </mq-layout>
  </div>
</template>
<script>
import GlobalHeader from "./components/GlobalHeader.vue";
import GlobalFooter from "./components/GlobalFooter.vue";
import AppAd from "./components/AppAd.vue";
export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    AppAd,
  },
  methods: {
    isLoggedIn() {
      const token = sessionStorage.getItem("token");
      if (token) {
        this.$store.dispatch("logIn");
      }
    },
  },
  mounted() {
    this.isLoggedIn();
  },
};
</script>
<style>
template {
  background-color: black;
}
.slick-slide:not(.slick-current) {
  opacity: 0.2;
}
</style>
