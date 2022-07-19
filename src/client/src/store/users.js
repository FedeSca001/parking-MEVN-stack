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
        addUser: async (name, dni, age, phone, email)=>{
            try {
                const url = 'http://localhost:5000/users/send';
                const data = {
                    name: name,
                    dni: dni,
                    age: age,
                    phone: phone,
                    email: email
                };
                console.log('data',data);
                const post = await axios.post(url,data);
                return await post.json();
            }catch {
                err => console.log(err);
            }
        }
    }
})