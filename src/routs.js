// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import Giras from './views/girastecnicas.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/girastecnicas',
    name: 'Giras',
    component: Giras
  }
  
];

const router = createRouter({
  history: createWebHistory(), // Usamos el modo history para URLs limpias
  routes
});

export default router;
