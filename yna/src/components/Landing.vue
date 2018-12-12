<template>
  <div>
    <!-- The landing page. Go to https://www.ynalliance.ca/ -->
    <div>
      <v-layout row wrap align-center justify-center id="head-bg">
        <v-flex column class="text-xs-center white--text" id="head-box" xs6>
          <h1>ARE YOU READY TO</h1>
          <h2>IGNITE YOUR PASSION FOR VOLUNTEERING?</h2>
          <v-btn round color="white purple--text">JOIN US TODAY</v-btn>
        </v-flex>
      </v-layout>
      <div id="spacer"></div>
      <v-container grid-list-md align-start>
        <v-layout align-center>
          <p>WHO WE ARE &nbsp</p>
          <v-flex column class="black" xs2></v-flex>
        </v-layout>
        <p>FIND MEANINGFUL</p>
        <p>VOLUNTEERING.</p>
      </v-container>
    </div>
  </div>
</template>

<style>
  #head-bg{
    min-width: 100%;
    height: 600px;
    background-image: url("../assets/laptop.jpg");
    background-size: cover;
  }
  #head-box{
    background-color: #4f2e86;
    opacity: 0.7;
    padding: 30px;
  }
  #spacer{
    width: 100%;
    height: 50px;
    background-color: #4f2e86;
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
