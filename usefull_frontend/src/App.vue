<script setup>
import { RouterView } from 'vue-router';
import Navbar from './views/Navbar.vue';

</script>

<template>


  <!-- <Navbar></Navbar> -->
  <Navbar v-if="$route.path == '/'"></Navbar>
  <RouterView></RouterView>



</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>