<template>
  <div>
    <v-layout row wrap align-center justify-center id="head-bg">
      <v-flex column id="head-box" class="text-xs-center white--text" xs6>
        <h1>ARE YOU READY TO</h1>
        <h2>IGNITE YOUR PASSION FOR VOLUNTEERING?</h2>
        <v-btn round color="white purple--text">JOIN US TODAY</v-btn>
      </v-flex>
    </v-layout>
    <div id="spacer"></div>
    <v-layout>
    </v-layout>
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
    background-color: rgb(79, 46, 134);
    opacity: 0.8;
    padding: 30px;
  }
  #spacer{
    width: 100%;
    height: 30px;
    background-color: rgb(79, 46, 134);
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
