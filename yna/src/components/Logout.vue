<template>
  <div class="outer">
    <div class="middle">
      <div class="inner">
        <h1 style="font-size: 120px; color: purple;">Logged out</h1>
        <p style="font-size: 30px;">Thanks for logging in - we'll see you later.</p>
        <v-btn large depressed round ripple color=purple style="color: white;">Go back</v-btn>
        <v-btn large depressed round outline ripple color=purple style="color: white;">Contact</v-btn>
      </div>
    </div>
  </div>
</template>

<style>
.outer {
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.middle {
  display: table-cell;
  vertical-align: middle;
}

.inner {
  margin-left: auto;
  margin-right: auto;
  width: 400px;
}
</style>

<script>
  export default {

  }
</script>
