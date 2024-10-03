<template>
  <div class="container mt-4">
    <!-- Formulario -->
    <form @submit.prevent="guardarDatos" class="form-section">
      <h2 class="text-center mb-4">{{ editIndex === null ? 'Agregar Instructor' : 'Actualizar Instructor' }}</h2>

      <div class="mb-3">
        <label for="regional" class="form-label">Regional:</label>
        <input class="form-control" v-model="formData.Regional" type="text" id="regional" placeholder="Regional"
          required>
      </div>

      <div class="mb-3">
        <label for="centroFormacion" class="form-label">Centro de Formación:</label>
        <input class="form-control" v-model="formData.CentroFormacion" type="text" id="centroFormacion"
          placeholder="Centro de Formación" required>
      </div>

      <div class="mb-3">
        <label for="instructor" class="form-label">Instructor:</label>
        <input class="form-control" v-model="formData.Instructor" type="text" id="instructor" placeholder="Instructor"
          required>
      </div>

      <div class="mb-3">
        <label for="correo" class="form-label">Correo electrónico:</label>
        <input class="form-control" v-model="formData.correo" type="email" id="correo" placeholder="Correo electrónico"
          required>
      </div>

      <button type="submit" class="btn btn-primary w-100">{{ editIndex === null ? 'Guardar' : 'Actualizar' }}</button>
    </form>

    <!-- Tabla de Instructores -->
    <div class="table-responsive mt-5">
      <h2 class="text-center mb-4">Lista de Instructores</h2>
      <table class="table table-bordered table-hover">
        <thead class="table-dark">
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
              <button class="btn btn-warning btn-sm me-2" @click="editarInstructor(index)">Editar</button>
              <button class="btn btn-danger btn-sm" @click="eliminarInstructor(index)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
/* Container del formulario y tabla */
.container {
  max-inline-size: 900px;
  margin: 0 auto;
}

/* Sección de formulario */
.form-section {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Etiquetas de formulario */
.form-label {
  font-weight: bold;
  color: #04324d;
}

/* Botón de formulario */
.btn-primary {
  background-color: #04324d;
  border: none;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #035282;
}

/* Tabla */
.table {
  margin-block-start: 20px;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1;
}

/* Estilos del encabezado de la tabla */
.table-dark {
  background-color: #04324d;
  color: #ffffff;
}

/* Botones de acciones (Editar y Eliminar) */
.btn-warning {
  background-color: #ffc107;
  border: none;
}

.btn-danger {
  background-color: #dc3545;
  border: none;
}

/* Espaciado entre botones */
.me-2 {
  margin-inline-end: 0.5rem;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }

  .form-section {
    padding: 15px;
  }

  .table-responsive {
    overflow-x: auto;
  }
}
</style>

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
