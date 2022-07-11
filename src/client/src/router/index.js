import { createRouter, createWebHistory } from 'vue-router'
import ParkingLot from '../views/ParkingLot/ParkingLot.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ParkingLot
  },
  {
    path: '/available',
    name: 'available',
    component: ()=> import('../views/Available/Available.vue')
  },
  {
    path: '/notavailable',
    name: 'notavailable-comp',
    component: ()=> import('../views/NotAvailable/NotAvailable.vue')
  },
  {
    path:'/setting/:id',
    name: 'setting',
    component: ()=> import('../views/SettingCard/SettingCard.vue')
  },
  {
    path: '/addpark',
    name: 'add-park',
    component: ()=> import('../views/AddPark/AddPark.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
