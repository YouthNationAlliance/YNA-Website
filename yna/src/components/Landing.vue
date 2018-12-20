<template>
  <div>
    <!-- The landing page. Go to https://www.ynalliance.ca/ -->
    <div>
      <v-layout row wrap align-center justify-center id="head-bg">
        <v-flex column class="text-xs-center white--text purpleBg" id="head-box" xs8>
          <h1>ARE YOU READY TO</h1>
          <h3>IGNITE YOUR PASSION FOR VOLUNTEERING?</h3>
          <v-btn round color="white purple--text" id="joinUs" @click="changePage('setup')"><h2>JOIN US TODAY</h2></v-btn>
        </v-flex>
      </v-layout>

      <div id="spacer" class="purpleBg"></div>

      <v-container algin-start>
        <img src="../assets/png/headers/FindMeaningfulVolunteering.png" width="40%">
        <p>YNA fundamendally believes that students need to be able to network and connect
          with those in the community. Our main objective is to provide students from all
          walks of life with valuable volunteering opportunities and to support  local charities
          and/or organizations in need of volunteers.
        </p>

        <br/>

        <v-layout row wrap>
          <v-flex column class="text-xs-center pa-4" xs4>
            <img src="../assets/jpg/Volunteering.jpg" width="100%">
            <v-layout row wrap class="text-xs-left ma-3 vl">
              <p class="title">DISCOVER THE LATEST</p>
              <p class="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </v-layout>
            <v-btn large color="purple white--text ma-2"><p class="headline">VOLUNTEERING</p></v-btn>
          </v-flex>
          <v-flex column class="text-xs-center pa-4" xs4>
            <img src="../assets/jpg/Leadership.jpg" width="100%">
            <v-layout row wrap class="text-xs-left ma-3 vl">
              <p class="title">ATTEND AND CONNECT</p>
              <p class="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </v-layout>
            <v-btn large color="purple white--text ma-2"><p class="headline">LEADERSHIP</p></v-btn>
          </v-flex>
          <v-flex column class="text-xs-center pa-4" xs4>
            <img src="../assets/jpg/MainScreenAlternate.jpg" width="100%">
            <v-layout row wrap class="text-xs-left ma-3 vl">
              <p class="title">LEARN WHAT'S OUT THERE</p>
              <p class="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </v-layout>
            <v-btn large color="purple white--text ma-2"><p class="headline">SCHOLARSHIP</p></v-btn>
          </v-flex>
        </v-layout>

        <br/>
        <br/>

        <hr id="spacer2" class="purpleFg"/>
        <v-flex class="text-xs-right doodle">
          <img src="../assets/png/doodles/doodles1.png" width="30%" id="doodle1">
        </v-flex>

        <v-layout row wrap>
          <v-flex column class="text-xs-center pa-3" xs4>
            <p>HAYDEN CHEUNG</p>
            <p>FOUNDER</p>
          </v-flex>
          <v-flex column class="text-xs-center pa-3" xs4>
          </v-flex>
          <v-flex column class="text-xs-center pa-3" xs4>
          </v-flex>
        </v-layout>

      </v-container>

    </div>
  </div>
</template>

<style>
  #head-bg{
    min-width: 100%;
    height: 600px;
    background-image: url("../assets/jpg/mainscreen.jpg");
    background-size: cover;
  }
  #head-box{
    min-height: 250px;
    opacity: 0.7;
    padding: 30px;
  }
  #spacer{
    width: 100%;
    height: 50px;
  }
  #spacer2{
    margin-right: 25%;
  }
  #joinUs{
    width: 50%;
    height: 55px;
  }
  .vl{
    border-left: 6px solid #4f2e86;
  }
  .doodle{
    z-index: -1;
  }
  #doodle1{
    position: relative;
    left: 10%;
    top: -200px;
  }
</style>

<script>
export default {
    data() {
        return {
            images: {
            }
        }
    },
    methods: {
      changePage(page) {
        this.$emit('newPage', page);
      }
    }
}
</script>
