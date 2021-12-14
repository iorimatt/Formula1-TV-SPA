<template>
  

<div>

    <b-container  fluid style="background-color:black">

            <b-row class="d-flex justify-content-center" style="height:100vh">

                <b-col cols="6" class="align-self-center d-flex justify-content-center">
                   
                   <b-row>

                    <b-img :src=F1Logo class="mb-5"></b-img>   
                   <h3 class="f1-font text-white mb-5">Baixe o App Oficial da F1</h3>
                    <b-button variant="danger" href="https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&hl=pt_PT&gl=US" >Baixar agora</b-button>
                    </b-row>
                    </b-col>

            </b-row>

    </b-container>


</div>


</template>

<script>

export default {

name: 'AppAd',

data() {
    return {
        F1Logo: this.$store.state.logo
    }
},


}

</script>

<style>

</style>