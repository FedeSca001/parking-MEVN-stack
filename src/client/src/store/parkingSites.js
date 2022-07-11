import { defineStore } from 'pinia';
import axios from 'axios';

export const useParking = defineStore('parksApi',{
  state: ()=>({
    listSites: {}
  }),
  actions:{
    async getData (){
      try{
          const url = 'http://localhost:5000/sites/park/';
          const r = await axios.get(url);
          const respuesta = await r.json();
          console.log(respuesta);
      }catch{
          err => console.log(err)
      }
  }
  }
})