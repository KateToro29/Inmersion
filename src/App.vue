<script setup>
import Navigation from './components/navigation.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BodyLanding  from './components/BodyLanding.vue'
import Formulario from './components/Formulario.vue';

</script>

<template>
  <router-view />
  <!-- <div class="container">
    <Navigation></Navigation>
    <BodyLanding></BodyLanding>
    <Formulario></Formulario>
  </div> --> 
</template>

<style scoped>
.logo {
  block-size: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
