

<template>
  <div>
    <b-container fluid style="background-color: #fbf8f8">
      <b-row
        class="
          d-flex
          justify-content-center
          mt-5
          mb-5
          box-login
          align-items-center
        "
      >
        <b-col cols="4">
          <b-row class="color-black align-items-center">
            <h1 class="f1-font mb-5 title-row pb-4">ENTRAR</h1>

            <div class="mb-3 mt-3">
              <label class="text-dark">Endereço de E-mail</label>
              <b-form-input v-model="text"></b-form-input>
            </div>

            <div class="mb-3 mt-3">
              <label class="text-dark">Senha</label>
              <b-form-input v-model="text"></b-form-input>
            </div>

            <div><p class="text-danger"><u>Esqueceu a senha?</u></p></div>


            <b-row>
             <b-col class="mt-4">
                <b-button variant="danger">ENTRAR</b-button>
            </b-col>
             </b-row>

          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
.box-login {
  min-height: 60vh;
}

.title-row {


border-style: solid;
border-color:#d0d0d2;
border-width: 0px 0px 1px 0px;


}


.color-black{

color: #333; 

}


input[type="text"]:focus {

border-color: black;
box-shadow: 0 0 0 0.25rem rgb(6 16 30 / 14%)


}
</style>