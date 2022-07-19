import axios from 'axios';
import { defineStore } from 'pinia';

export const useUsers = defineStore('useUser', {
    state:()=>({
        listUsers: []
    }),
    actions:{
        async getUsers(){
            try {
            const url = 'http://localhost:5000/users/';
            const rData = await axios.get(url);
            this.listUsers = rData.data;
            } catch{
                err => console.log(err);
            }
        },
        addUser: async (naMe, dNi, aGe, pHone, eMail)=>{
            try {
                const url = 'http://localhost:5000/users/send';
                const data = {
                    name: naMe,
                    age: aGe,
                    dni: dNi,
                    phone: pHone,
                    mail: eMail
                };
                console.log('data',data);
                const post = await axios.post(url,data);
                console.log(post);
            }catch {
                err => console.log(err);
            }
        }
    }
})