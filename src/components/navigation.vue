<template>
  <div>
    <!-- Sección del logo y título -->
    <div class="row p-4 align-items-center header-section">
      <div class="col-4">
        <a class="navbar-brand" href="https://oferta.senasofiaplus.edu.co/sofia-oferta/" target="_blank">
          <img src="/src/img/logoSena.png" class="logo" alt="Sena logo" />
        </a>
      </div>
      <div class="col-8">
        <h3 class="title">Giras Técnicas</h3>
      </div>
    </div>
  </div>

  <!-- Sección de la barra de navegación -->
  <div class="row border-top">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="col-12">
        <div id="navbarNav">
          <ul class="navbar-nav justify-content-around">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item" v-if="$route.path !== '/girastecnicas'">
              <router-link class="nav-link" to="/girastecnicas">Giras</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
/*--------------------------------------------------------*/
/* Estilos generales para la sección de encabezado */
.header-section {
  background-color: #04324d;
  /* Fondo azul oscuro */
  color: #ffffff;
  /* Color de texto blanco */
  border-radius: 8px;
  /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Sombras ligeras */
}

.logo {
  width: 80px;
  /* Tamaño del logo */
  height: 80px;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
  /* Zoom suave al hacer hover */
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  text-align: right;
}

/* Ajustes responsivos para pantallas pequeñas */
@media (max-width: 768px) {
  .header-section {
    text-align: center;
    /* Centra el contenido en pantallas pequeñas */
  }

  .title {
    text-align: center;
    margin-top: 15px;
    /* Espacio superior adicional */
  }

  .logo {
    margin: 0 auto;
    display: block;
  }
}

/*--------------------------------------------------------*/
/* Contenedor de la barra de navegación */
#navbarNav {
  background-color: #f8f9fa;
  /* Fondo gris claro */
  padding: 15px 0;
  border-radius: 8px;
  /* Bordes redondeados */
}

.navbar-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 15px;
  /* Espaciado entre los elementos */
}

.nav-link {
  color: #04324d !important; /* Asegura que el color sea azul oscuro */
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 12px;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: #04324d !important; /* Fondo azul oscuro al hacer hover */
  color: #ffffff !important; /* Texto blanco al hacer hover */
}


/* Enlace activo */
.nav-link.router-link-exact-active {
  color: #28a745;
  /* Verde para el enlace activo */
  font-weight: bold;
}
</style>



<script>
export default {
  name: 'Navigation'
}
</script>