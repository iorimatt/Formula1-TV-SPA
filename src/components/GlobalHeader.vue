<template>
  <div style="z-index: 4">
    <b-navbar variant="light">
      <div class="col- d-flex justify-content-end">
        <b-navbar-nav class="ms-5">
          <b-nav-item
            class="f1Bold"
            v-for="category in Categories"
            :key="category.name"
            :href="category.link"
            >{{ category.name }}</b-nav-item
          >
        </b-navbar-nav>
      </div>

      <b-navbar-nav class="ms-auto menu-options f1Cat p-0">
        <b-nav-item
          v-for="option in Options"
          :key="option.name"
          :href="option.link"
          >{{ option.name }}</b-nav-item
        >
      </b-navbar-nav>

      <div class="col-4">
        <b-navbar-brand href="#" class="me-3 ms-5 f1-logo"
          ><b-img
            height="80"
            width="80"
            :src="F1Logo"
            fluid
            alt="Responsive image"
          ></b-img
        ></b-navbar-brand>

        <b-button
          v-if="IsLogged"
          v-b-modal="'modalUser'"
          class="me-1"
          variant="outline-danger"
          ><b-icon-person class="me-1 pe-1"></b-icon-person
          >{{ UserProfile }}</b-button
        >

        <b-button v-if="SignUp" variant="dark" class="me-3 pe-3"
          ><b-icon-person></b-icon-person>ENTRAR</b-button
        >

        <b-button v-if="SignUp" variant="danger">SE INSCREVA</b-button>

        <b-modal v-if="IsLogged" id="modalUser">
          <div class="d-flex justify-content-center">
            <div>
              <h4 class="mb-3">{{ UserProfile }}</h4>
            </div>
          </div>

          <div class="d-flex justify-content-center">
            <b-button class="col-6 modal-button" variant="danger"
              >GERENCIAR CONTA</b-button
            >
          </div>
        </b-modal>
      </div>
    </b-navbar>

    <b-navbar class="p-0 local-header f1-container">
      <div class="col-3 d-flex justify-content-end">
        <b-nav-brand
          ><router-link to="/"
            ><b-img
              class="m-3"
              height="25"
              src="https://f1tv.formula1.com/static/3adbb5b25a6603f282796363a74f8cf3.png"
            ></b-img></router-link
        ></b-nav-brand>
      </div>
      <div class="col-7 ms-3">
        <b-nav-item
          class="sub-menu"
          v-for="option in SubOptions"
          :key="option.name"
          ><router-link class="link" :to="{ path: option.link }">{{
            option.name
          }}</router-link></b-nav-item
        >
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "GlobalHeader",

  data: function () {
    return {
      IsLogged: this.$store.state.IsLogged,
      UserProfile: this.$store.state.UserProfile,
      F1Logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg",

      Options: this.$store.state.optionsMenu,

      SubOptions: this.$store.state.SubOptionsMenu,

      Categories: this.$store.categoriesMenu,
    };
  },

  computed: {
    SignUp: function () {
      return !this.IsLogged;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "Formula1";
  src: local("Formula1"), url("../fonts/Formula1-Bold_web_0.ttf");
  format: ("ttf");
}

@font-face {
  font-family: "Titillium";
  src: local("Titillium"), url("../fonts/TitilliumWeb-Regular.ttf");
  format: ("ttf");
}

@font-face {
  font-family: "Formula1-regular";
  src: local("Formula1-regular"), url("../fonts/Formula1-Regular_web_0.ttf");
  format: ("ttf");
}

ul {
  list-style-type: none;
  padding: 0px;
}

li {
  display: inline-block;
  margin: 0 10px;
  color: black;
  padding: 0px;
}

.link {
  text-decoration: none;

  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 2em;
  margin: -2em;
}

.f1-logo {
  border-left-color: #d8d8d8;
  border-right: #d8d8d8;
  border-width: 0px 1px;
  border-style: solid;
  padding: 0px 2vw;
}

.f1Bold {
  font-family: "Formula1";
  font-size: 15px;
}

.f1Cat {
  font-family: "Titillium";
  font-size: 12px;
  color: black;
  font-weight: 600;
  padding-bottom: 0px;
}

.f1Cat .nav-link:hover {
  border-bottom-color: red;
  border-style: solid;
  border-width: 0px 0px 2px 0px;
  box-sizing: border-box;
  padding-bottom: 0px;
}

.f1Bold .nav-link:hover {
  color: black;
}

.sub-menu a {
  color: white;
  font-family: "Formula1-regular";
  padding: 21px;
  font-weight: 300;
  font-size: 14px;
}

.f1-container {
  background-color: #e10600;
}

.sub-menu a:hover {
  background-color: #15151e;
}

.modal-button {
  font-family: "Formula1-regular";
  font-size: 12px;
  text-align: start;
}
</style>
