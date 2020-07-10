<template>
  <div class="loader_test">
      <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.loader_test{
    height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>