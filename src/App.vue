<template>
  <div>
        <global-header></global-header>
       
         <router-view/>

         <global-footer></global-footer>
  </div>
</template>

<script>


import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'



export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    
    
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
