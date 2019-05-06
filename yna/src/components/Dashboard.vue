<template>
  <div class="outer">
    <div class="middle">
      <div class="inner">
        <h1 style="font-size: 120px; color: purple;">Events</h1>
        <p style="font-size: 30px;">Find events that suit you.</p>
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

<script>
  export default{
    name: 'dashboard',
    data: () => ({

    }),
    methods: {

    }
  }
</script>
