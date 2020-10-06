import Vue from 'vue'
import VueRouter from 'vue-router'
import Cars from '../components/AppCars.vue'
import AddCar from '../components/AddCar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cars',
    name: 'cars-app',
    component: Cars
  },
   {
    path: '/add-car',
    name: 'add-car',
    component: AddCar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
