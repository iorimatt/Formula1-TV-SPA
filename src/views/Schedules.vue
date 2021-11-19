



<template>
  <div>
    <b-container class="mt-5" style="padding: 0vh 20vh">
      <b-row class="d-flex">
        <h2 class="f1-font text-white">Horários</h2>
        <p class="f1-font text-white">
          Horários de F2 e F3 serão anunciados mais perto do fim de semana do
          Grande Prêmio
        </p>
      </b-row>
    </b-container>

    <b-container style="padding: 0vh 20vh">
      <b-row class="d-flex mt-5">
        <h2 class="f1-font text-white">{{raceName}}</h2>
        <p class="f1-font text-white">Data da Corrida | {{raceDate}}</p>
      </b-row>

      <b-row class="d-flex mt-5">
        <h2 class="f1-font text-white">Agenda da Semana</h2>
        <div>
          <b-tabs content-class="mt-3" align="end">
            <b-tab title="FÓRMULA 1" active
              ><div class="text-white p-5 bg-black">
                <div class="container">
                  <b-row class="row">
                    <b-col cols="6" class="d-flex justify-content-center"
                      ><h5>TREINO LIVRE</h5></b-col
                    >
                    <b-col cols="6" class="d-flex justify-content-center"
                      ><h5>FRI 07:30 - 08:30</h5></b-col
                    >
                  </b-row>
                </div>
              </div>
            </b-tab>
            <b-tab title="ALL"
              ><div class="text-white p-5 bg-black">
                I'm the first tab
              </div></b-tab
            >
          </b-tabs>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      raceName:'',
      raceDate:'',
      currentRound: 20,
    };
  },

  methods: {

     

    getRaceInfo() {
      axios
        .get("http://ergast.com/api/f1/2021/"+ this.currentRound + ".json")
        .then((res) => {
          this.raceName = res.data.MRData.RaceTable.Races[0].raceName;
            this.raceDate = res.data.MRData.RaceTable.Races[0].date;
        })
        .catch((error) => {
          this, (this.raceName = error);
        });
    },

  
  },

  mounted(){

      this.getRaceInfo()
      

  }
};
</script>

<style>
</style>