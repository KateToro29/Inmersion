<template>
  <div>
    <div class="row p-4">
      <div class="col-4 ">
        <a class="navbar-brand" href="https://oferta.senasofiaplus.edu.co/sofia-oferta/" target="_blank">
          <img src="/src/img/logoSena.png" class="logo" alt="Sena logo" width="70" height="70" />
        </a>
      </div>
      <div class="col-8 ">
        <h3 class="d-flex justify-content-end">Giras Técnicas</h3>
      </div>
    </div>
  </div>
  <div  class="row border-top">

    <nav class=" navbar navbar-expand-lg  ">

      <div class="col-12">
        <div class="" id="navbarNav">
          <ul class="navbar-nav  justify-content-around">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item " v-if="$route.path !== '/girastecnicas'">
              <router-link class="nav-link" to="/girastecnicas">Giras</router-link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>