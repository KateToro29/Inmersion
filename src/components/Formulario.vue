<template>
  <div>
    <form @submit.prevent="guardarDatos">
      <label>Regional:</label>
      <input class="form-control" v-model="formData.Regional" type="text" placeholder="Regional" required>
      <br>
      <label>Centro de Formación:</label>
      <input class="form-control" v-model="formData.CentroFormacion" type="text" placeholder="Centro de Formación"
        required>
      <br>
      <label>Instructor:</label>
      <input class="form-control" v-model="formData.Instructor" type="text" placeholder="Instructor" required>
      <br>
      <label>Correo electrónico:</label>
      <input class="form-control" v-model="formData.correo" type="email" placeholder="Correo electrónico" required>
      <br>
      <button type="submit">{{ editIndex === null ? 'Guardar' : 'Actualizar' }}</button>
    </form>

    <h2>Lista de Instructores</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Regional</th>
          <th scope="col">Centro de Formación</th>
          <th scope="col">Instructor</th>
          <th scope="col">Correo electrónico</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(instructor, index) in instructores" :key="index">
          <td>{{ instructor.Regional }}</td>
          <td>{{ instructor.CentroFormacion }}</td>
          <td>{{ instructor.Instructor }}</td>
          <td>{{ instructor.correo }}</td>
          <td>
            <button @click="editarInstructor(index)">Editar</button>
            <button @click="eliminarInstructor(index)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        Regional: '',
        CentroFormacion: '',
        Instructor: '',
        correo: ''
      },
      instructores: [],
      editIndex: null // Para almacenar el índice del instructor a editar
    };
  },
  methods: {
    guardarDatos() {
      if (this.editIndex === null) {
        // Agrega una copia de formData a la lista de instructores
        this.instructores.push({ ...this.formData });
      } else {
        // Actualiza el instructor existente
        this.instructores[this.editIndex] = { ...this.formData };
        this.editIndex = null; // Restablece el índice de edición
      }

      // Limpia el formulario
      this.formData = {
        Regional: '',
        CentroFormacion: '',
        Instructor: '',
        correo: ''
      };
    },
    editarInstructor(index) {
      // Carga los datos del instructor seleccionado en el formulario
      this.formData = { ...this.instructores[index] }; // Copia el objeto
      this.editIndex = index; // Establece el índice del instructor a editar
    },
    eliminarInstructor(index) {
      // Elimina el instructor de la lista
      this.instructores.splice(index, 1);
      // Si se elimina el instructor que se está editando, limpiar el formulario
      if (this.editIndex === index) {
        this.editIndex = null;
        this.formData = {
          Regional: '',
          CentroFormacion: '',
          Instructor: '',
          correo: ''
        };
      }
    }
  }
};
</script>
