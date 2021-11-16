<template>
  <div>
        <global-header></global-header>
       <router-view/>
  </div>
</template>

<script>


import GlobalHeader from './components/GlobalHeader.vue'



export default {
  components: {
    GlobalHeader,
    
    
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
