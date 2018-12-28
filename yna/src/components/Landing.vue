<template>
  <div>
    <!-- The landing page. Go to https://www.ynalliance.ca/ -->
    <div style="background-color: white;">
      <v-layout row wrap align-center justify-center id="head-bg">
        <v-flex column class="text-xs-center white--text purpleBg" id="head-box" xs8 style="min-width: 100px;">
          <h1>ARE YOU READY TO</h1>
          <h3>IGNITE YOUR PASSION FOR VOLUNTEERING?</h3>
          <v-btn round color="white purple--text" id="joinUs" @click="changePage('setup')"><h2>JOIN US TODAY</h2></v-btn>
        </v-flex>
      </v-layout>

      <div id="spacer" class="purpleBg"></div>
      <v-container align-start style="padding-top: 50px;">
        <img src="../assets/png/headers/FindMeaningfulVolunteering.png" width="40%">
        <p style="padding-left: 15px; padding-top: 15px;">YNA fundamendally believes that students need to be able to network and connect
          with those in the community. Our main objective is to provide students from all
          walks of life with valuable volunteering opportunities and to support  local charities
          and/or organizations in need of volunteers.
        </p>

        <v-layout row wrap>
          <v-flex column class="text-xs-center pa-4" xs4>
            <img src="../assets/jpg/Volunteering.jpg" width="100%">
            <v-layout row wrap class="text-xs-left ma-3 vl" style="padding-left: 15px;">
              <p class="title">DISCOVER THE LATEST</p>
              <p class="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </v-layout>
            <v-btn large style="background-color: #4f2e86; color: white; font-weight: bold; font-size: 20px;">VOLUNTEERING</v-btn>
          </v-flex>
          <v-flex column class="text-xs-center pa-4" xs4>
            <img src="../assets/jpg/Leadership.jpg" width="100%">
            <v-layout row wrap class="text-xs-left ma-3 vl" style="padding-left: 15px;">
              <p class="title">ATTEND AND CONNECT</p>
              <p class="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </v-layout>
            <v-btn large style="background-color: #4f2e86; color: white; font-weight: bold; font-size: 20px;">LEADERSHIP</v-btn>
          </v-flex>
          <v-flex column class="text-xs-center pa-4" xs4>
            <img src="../assets/jpg/MainScreenAlternate.jpg" width="100%">
            <v-layout row wrap class="text-xs-left ma-3 vl" style="padding-left: 15px;">
              <p class="title">LEARN WHAT'S OUT THERE</p>
              <p class="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </v-layout>
            <v-btn large style="background-color: #4f2e86; color: white; font-weight: bold; font-size: 20px;">SCHOLARSHIP</v-btn>
          </v-flex>
        </v-layout>

        <br><br><br>
        <hr id="spacer2" class="purpleFg"/>
        <v-flex class="text-xs-right doodle">
          <img src="../assets/png/doodles/doodles1.png" width="30%" id="doodle1">
        </v-flex>

        <v-layout row wrap>
          <v-flex column class="text-xs-center pa-3" xs4>
            <img src="../assets/png/headers/messagefromthefounder.png" width=100% id="founder_message">
            <img src="../assets/png/haydenface.png" width=100% id="hayden">
            <img src="../assets/png/headers/Haydencheungfounder.png" width=60% id="hayden_founder">
          </v-flex>
          <v-flex column class="text-xs-center pa-3" xs4>
            <p class="hayden_text1">
            If you're on this site and you know
            what you're passionate about - <b style="position: relative; bottom: 32px; left: 280px;">good.</b>
            <mark style="background-color: #4f2e86; font-weight: bold; color: white; position: relative; right: 95px;">If you're lost - great.</mark>
            </p>
            <p class="hayden_text2">
            Like many of you, I was once searching for
            my own passion - something to be inspired
            by. From volunteering at charity fundraising
            galas, concerts, and car washes, to tree
            planting events, government events, and
            leadership conferences, you could say I've
            done some exploring. I'll be frank with you,
            some events and opportunities I liked more
            than others.
            </p>
            <p class="hayden_text3">
            While not all events may peak your interest, I've
            discovered why it's so important to not be afraid
            to try new things. When you are open to
            discovering and eager to explore, your
            opportunities to grow are limitless.
            <br><br>
            If you're on this site and you know what you're
            passionate about - good. If you're lost - great. I
            want you to know that you're not alone in feeling
            "lost". Discovering what you are passionate about
            will require time, effort, and perseverance. Be
            patient and remain willing to challenge yourself.
            <br><br>
            <b>Thanks for joining us.</b>
            </p>
          </v-flex>
          <v-flex column class="text-xs-center pa-3" xs4>
            <img src="../assets/png/haydensignature.png" width="100%" id="signature">
          </v-flex>
        </v-layout>
        <br><br><br>

        <v-flex class="text-xs-left doodle2">
          <img src="../assets/png/doodles/doodles2.png" width="25%" id="doodle3">
        </v-flex>
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
  #founder_message {
    position: relative;
    top: -300px;
    left: 300px;
  }
  #hayden {
    position: relative;
    top: -400px;
    left: -10px;
  }
  #hayden_founder {
    position: relative;
    left: -10px;
    top: -412px;
  }
  .hayden_text1 {
    position: relative;
    top: -180px;
    right: 20px;
  }
  .hayden_text2 {
    text-align: left;
    position: relative;
    font-size: 17px;
    top: -160px;
    right: 15px;
  }
  .hayden_text3 {
    text-align: left;
    position: relative;
    font-size: 17px;
    top: -600px;
    left: 400px;
  }
  #signature {
    position: relative;
    top: 150px;
  }
  .doodle2 {
    z-index: -1;
  }
  #doodle3 {
    position: relative;
    right: 10%;
    top: -700px;
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
