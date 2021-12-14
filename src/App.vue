<template>
  <div>


<mq-layout mq="mobile"> 

<app-ad></app-ad>

  
</mq-layout>

  <mq-layout mq="desktop">
        <global-header></global-header>
     
         <router-view/>
         

         <global-footer></global-footer>
  </mq-layout>

  </div>
</template>

<script>


import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'
import AppAd from './components/AppAd.vue'



export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    AppAd,
    
    
  }
}
</script>



<style>


template {

background-color: black


}

.slick-slide:not(.slick-current) {

opacity: 0.2 ;

}









</style>
