import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Basket from '../components/Basket.vue'
import Product from '../components/Product.vue'
import Cadastro from '../components/Cadastro.vue'
import Login from '../components/login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
        },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
