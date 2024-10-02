<!-- MiFormulario.vue -->
<template>
    <div>
      <form>
        <label>Nombre:</label>
        <input v-model="nombre" type="text" placeholder="Nombre">
        <br>
        <label>Apellido:</label>
        <input v-model="apellido" type="text" placeholder="Apellido">
        <br>
        <label>Correo electrónico:</label>
        <input v-model="correo" type="email" placeholder="Correo electrónico">
        <br>
        <button @click="guardarDatos">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        apellido: '',
        correo: ''
      }
    },
    methods: {
      guardarDatos() {
        const datos = {
          nombre: this.nombre,
          apellido: this.apellido,
          correo: this.correo
        };
        localStorage.setItem('datos', JSON.stringify(datos));
      }
    }
  }
  </script>