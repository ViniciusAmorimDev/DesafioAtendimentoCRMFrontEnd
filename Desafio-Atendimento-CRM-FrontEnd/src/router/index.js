import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Clientes from '../views/Clientes.vue'
import Usuarios from '../views/Usuarios.vue'
import Atendimentos from '../views/Atendimentos.vue'
import AdicionarCliente from '../views/AdicionarCliente.vue'
import AdicionarUsuarios from '../views/AdicionarUsuarios.vue'
import AdicionarAtendimento from '../views/AdicionarAtendimento.vue'
import AdicionarParecer from '../views/AdicionarParecer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/atendimentos',
    name: 'Atendimentos',
    component: Atendimentos
  },
  {
    path: '/Pareceres',
    name: 'Pareceres',
    component: () => import('../views/Pareceres.vue')
  },
  {
    path: '/AdicionarCliente',
    name: 'AdicionarCliente',
    component: AdicionarCliente
  },
  {
    path: '/AdicionarUsuarios',
    name: 'AdicionarUsuarios',
    component: AdicionarUsuarios
  },
  {
    path: '/AdicionarAtendimento',
    name: 'AdicionarAtendimento',
    component: AdicionarAtendimento
  },
  {
    path: '/AdicionarParecer',
    name: 'AdicionarParecer',
    component: AdicionarParecer
  },
  {
    path: '/EditarParecer',
    name: 'EditarParecer',
    component: () => import('../views/EditarParecer.vue')
  },
  {
    path: '/InativarAtendimento',
    name: 'InativarAtendimento',
    component: () => import('../views/InativarAtendimento.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
