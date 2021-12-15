<template>
  <div>
    <b-container class="footer">
      <b-row>
        <b-col class="col-4">
          <b-row>
            <b-col>
              <ul>
                <li
                  class="general-link titillium-regular text-white pt-3"
                  v-for="link in generalLinks"
                  :key="link.name"
                >
                  {{ link.name.toUpperCase() }}
                </li>
              </ul>
            </b-col>
            <b-col>
              <ul>
                <li
                  class="general-link titillium-regular text-white pt-3"
                  v-for="link in socialLinks"
                  :key="link.name"
                >
                  {{ link.name.toUpperCase() }}
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="col-8">
          <b-row>
            <b-col>
              <b-img
                class="mt-3"
                width="150"
                src="https://f1tv.formula1.com/static/3adbb5b25a6603f282796363a74f8cf3.png"
              ></b-img>
            </b-col>
          </b-row>
          <b-row>
            <b-col><p class="text-white mt-3 mb-3" >Disponível em</p></b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-img
                class="me-3"
                width="100"
                src="https://f1tv.formula1.com/static/47139e4bf0dda3e6781b7e94c942ab6b.png"
                ><b-link></b-link
              ></b-img>
              <b-img
                class="me-3"
                width="100"
                src="https://f1tv.formula1.com/static/c7645a29ebdde48cadd58c06fd1709fe.png"
                ><b-link></b-link
              ></b-img>
              <b-img
                class="me-3"
                width="100"
                src="https://f1tv.formula1.com/static/7b6506c4318bbb153321af62c46c67c3.png"
                ><b-link></b-link
              ></b-img>
              <b-img
                class="me-3"
                width="80"
                src="https://f1tv.formula1.com/static/e676193f63c5ac3a7c13ead082731ba5.png"
                ><b-link></b-link
              ></b-img>
              <b-img
                class="me-3"
                width="100"
                src="https://f1tv.formula1.com/static/6ad681ab93bfadd4396224e103e5931d.png"
                ><b-link></b-link
              ></b-img>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="mt-3">
        <b-col class="text-white">{{this.$store.state.title}}</b-col>
        <b-col
          ><p class="copywritten text-end ">
            © 2003 - 2021 Formula One World Championship Limited
          </p></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "GlobalFooter",
  data: function () {
    return {
      generalLinks: this.$store.state.generalLinksFooter,
      socialLinks: this.$store.state.socialLinksFooter,
    };
  },
};
</script>
<style>
.footer {
  border-top: 2px solid #38383f;
  border-bottom: 2px solid #38383f;
  padding: 10px 0px;
}
.general-link {
font-size: 12px;
list-style-type: none; 
}
.general-link:hover {
    text-decoration: underline;
    text-decoration-color: #e10600;
    text-underline-position: under;
}
.copywritten {
font-size: 12px;
color:#d0d0d2;
}
</style>