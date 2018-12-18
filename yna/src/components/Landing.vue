<template>
  <div>
    <!-- The landing page. Go to https://www.ynalliance.ca/ -->
    <div>
      <v-layout row wrap align-center justify-center id="head-bg">
        <v-flex column class="text-xs-center white--text" id="head-box" xs8>
          <h1>ARE YOU READY TO</h1>
          <h3>IGNITE YOUR PASSION FOR VOLUNTEERING?</h3>
          <v-btn round color="white purple--text" id="joinUs"><h2>JOIN US TODAY</h2></v-btn>
        </v-flex>
      </v-layout>
      <div id="spacer"></div>
      <v-container algin-start>
        <img src="../assets/png/headers/FindMeaningfulVolunteering.png" width="40%"></img>
        <p>YNA fundamendally believes that students need to be able to network and connect
        with those in the community. Our main objective is to provide students from all
        walks of life with valuable volunteering opportunities and to support  local charities
         and/or organizations in need of volunteers.</p>
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
<<<<<<< HEAD
    background-color: rgb(79, 46, 134);
    opacity: 0.8;
=======
    min-height: 250px;
    background-color: #4f2e86;
    opacity: 0.7;
>>>>>>> 3fedd987d984d136ce20b30a9c0e4dd204073f9f
    padding: 30px;
  }
  #spacer{
    width: 100%;
<<<<<<< HEAD
    height: 30px;
    background-color: rgb(79, 46, 134);
=======
    height: 50px;
    background-color: #4f2e86;
  }
  #joinUs{
    width: 50%;
    height: 55px;
>>>>>>> 3fedd987d984d136ce20b30a9c0e4dd204073f9f
  }
</style>

<script>
export default {
    data() {
        return {
            images: {
            }
        }
    }
}
</script>
