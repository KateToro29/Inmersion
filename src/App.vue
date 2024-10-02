<script setup>
import Formulario from './components/Formulario.vue'
import Navigation from './components/navigation.vue'
import ListarGiras from './components/ListarGiras.vue'
</script>

<template>
  <div>
    <a href="https://oferta.senasofiaplus.edu.co/sofia-oferta/" target="_blank">
      <img src="../media/img/logo-sena-verde-png-sin-fondo.webp" class="logo" alt="Sena logo" />
    </a>
  </div>
  
  <Navigation></Navigation>
  <Formulario></Formulario>
  <ListarGiras></ListarGiras>
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
