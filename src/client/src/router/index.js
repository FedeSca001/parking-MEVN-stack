import { createRouter, createWebHistory } from 'vue-router'
import ParkingLot from '../views/ParkingLot/ParkingLot.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ParkingLot
  },
  {
    path: '/avaliable',
    name: 'avaliable',
    component: ()=> import('../views/Avaliable/Avaliable.vue')
  },
  {
    path: '/notavaliable',
    name: 'notavaliable-comp',
    component: ()=> import('../views/NotAvaliable/NotAvaliable.vue')
  },
  {
    path: '/addpark',
    name: 'add-park',
    component: ()=> import('../views/AddPark/AddPark.vue')
  },
  {
    path: '/update/:id',
    name: 'update-comp',
    component: ()=> import('../views/UpdatePark/UpdatePark.vue')
  },
  {
    path: '/uploadImg',
    component: ()=> import('../views/AddImg/AddImg.vue')
  },
  {
    path: '/usersMain',
    component: ()=> import('../views/UsersMain/UsersMain.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
