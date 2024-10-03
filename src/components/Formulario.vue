<template>
  <div class="container mt-4">
    <!-- Formulario -->
    <form @submit.prevent="guardarDatos" class="form-section">
      <h3 class="text-center mb-2">{{ editIndex === null ? 'Agregar Instructor' : 'Actualizar Instructor' }}</h3>

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
      <h4 class="text-center mb-4">Instructores Giras Técnicas</h4>

      <!-- Barra de búsqueda -->
      <input v-model="search" class="form-control mb-3" type="text" placeholder="Buscar por nombre, centro o correo">

      <!-- Filtro por Regional -->
      <select v-model="selectedRegional" class="form-select mb-3">
        <option value="">Todos los regionales</option>
        <option v-for="regional in regionales" :key="regional">{{ regional }}</option>
      </select>
      <!-- Botones para exportar -->
      <div class="mb-3">
        <button class="btn btn-primary me-2 " @click="exportarCSV">Exportar a CSV</button>
        <button class="btn btn-success " @click="exportarExcel">Exportar a Excel</button>
        
      </div>

      <table class="table table-bordered table-hover">
        <thead class="table-primary">
          <tr>
            <th  scope="col" @click="ordenarPor('Regional')">Regional <span>{{ sortedColumn === 'Regional' ? sortedOrder : '' }}</span></th>
            <th scope="col" @click="ordenarPor('CentroFormacion')">Centro de Formación <span>{{ sortedColumn === 'CentroFormacion' ? sortedOrder : '' }}</span></th>
            <th  scope="col" @click="ordenarPor('Instructor')">Instructor <span>{{ sortedColumn === 'Instructor' ? sortedOrder : '' }}</span></th>
            <th scope="col" @click="ordenarPor('correo')">Correo electrónico <span>{{ sortedColumn === 'correo' ? sortedOrder : '' }}</span></th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(instructor, index) in instructoresFiltrados" :key="index">
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

<script>
import * as XLSX from "xlsx";

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
      editIndex: null, 
      search: '', 
      selectedRegional: '', // 
      sortedColumn: '', // 
      sortedOrder: 'asc' // Orden ascendente o descendente
    };
  },
  computed: {
    instructoresFiltrados() {
      let filtrados = this.instructores;

      if (this.search) {
        filtrados = filtrados.filter(instructor =>
          instructor.Instructor.toLowerCase().includes(this.search.toLowerCase()) ||
          instructor.CentroFormacion.toLowerCase().includes(this.search.toLowerCase()) ||
          instructor.correo.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      if (this.selectedRegional) {
        filtrados = filtrados.filter(instructor => instructor.Regional === this.selectedRegional);
      }

      return this.ordenar(filtrados);
    },
    
    regionales() {
      return [...new Set(this.instructores.map(instructor => instructor.Regional))];
    }
  },
  methods: {
    guardarDatos() {
      if (this.editIndex === null) {
        this.instructores.push({ ...this.formData });
      } else {
        this.instructores[this.editIndex] = { ...this.formData };
        this.editIndex = null;
      }

      this.formData = {
        Regional: '',
        CentroFormacion: '',
        Instructor: '',
        correo: ''
      };
    },
    editarInstructor(index) {
      this.formData = { ...this.instructores[index] };
      this.editIndex = index;
    },
    eliminarInstructor(index) {
      this.instructores.splice(index, 1);
      if (this.editIndex === index) {
        this.editIndex = null;
        this.formData = {
          Regional: '',
          CentroFormacion: '',
          Instructor: '',
          correo: ''
        };
      }
    },
    ordenarPor(columna) {
      if (this.sortedColumn === columna) {
        this.sortedOrder = this.sortedOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortedOrder = 'asc';
      }
      this.sortedColumn = columna;
    },
    ordenar(instructores) {
      if (!this.sortedColumn) return instructores;

      return instructores.sort((a, b) => {
        let valA = a[this.sortedColumn];
        let valB = b[this.sortedColumn];

        if (this.sortedOrder === 'asc') {
          return valA > valB ? 1 : -1;
        } else {
          return valA < valB ? 1 : -1;
        }
      });
    },
    exportarExcel() {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(this.instructores);
      XLSX.utils.book_append_sheet(wb, ws, "Instructores");
      XLSX.writeFile(wb, "instructores.xlsx");
    },
    exportarCSV() {
      const HojaCalculo = XLSX.utils.json_to_sheet(this.instructores);
      const csv = XLSX.utils.sheet_to_csv(HojaCalculo); // Convertir hoja a CSV
      const ObjetoBlob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(ObjetoBlob);

      link.setAttribute("href", url);
      link.setAttribute("download", "instructores.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
</script>

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
.table-dark{
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
