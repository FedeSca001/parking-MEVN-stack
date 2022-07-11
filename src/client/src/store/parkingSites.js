import { defineStore } from 'pinia';
import axios from 'axios';

export const useParking = defineStore('parksApi',{
  state: ()=>({
    listSites: {}
  }),
  actions:{
    async getData (){

          const url = 'http://localhost:5000/sites/park/';
          const r = await axios.get(url);
          this.listSites = await r.json();
          console.log(this.listSites);
  }
  }
})
/*
import { defineStore } from 'pinia'

export const useProducts = defineStore('productsApi',{
    state: ()=>({
        restorants: [],
        cartList: JSON.parse(localStorage.getItem('cartList')) || [],
        cartConfirm: false,
        orderList: JSON.parse(localStorage.getItem('orderList')) || []
    }),
    actions:{
        async getData(){
            const url = 'https://62630e3ac430dc560d2b8a72.mockapi.io/restorants'
            const r = await fetch(url)
            this.restorants = await r.json()
        },}
})
*/