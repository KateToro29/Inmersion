
<!-- MiComponente.vue -->
<template>
    <div>
      <h3>Datos almacenados:</h3>
      <ul>
        <li>Regional: {{ datos.Regional }}</li>
        <li>CentroFormacion: {{ datos.CentroFormacion }}</li>
        <li>Instructor: {{ datos.Instructor }}</li>
        <li>Correo electrónico: {{ datos.correo }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  const datos = JSON.parse(localStorage.getItem('datos'));
  console.log(datos); // Output: { nombre: "Juan", apellido: "Pérez", correo: "juanperez@example.com" }
  export default {
    data() {
      return {
        datos: {}
      }
    },
    mounted() {
      const datos = JSON.parse(localStorage.getItem('datos'));
      this.datos = datos;
    }
  }
  </script>