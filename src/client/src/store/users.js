import axios from 'axios';
import { defineStore } from 'pinia';

export const useUsers = defineStore('useUser', {
    state:()=>({
        data:{
            name: '',
            dni: Number,
            age: Number,
            phone: Number,
            mail: ''
        },
        usersList: {}
    }),
    actions:{
        getUsers: async ()=>{
            const url = 'http://localhost:5000/users/';
            const r = await axios.get(url);
            this.usersList = await r.data;
        },
        addUser: async (state)=>{
            try {
                const url = 'http://localhost:5000/users/send';
                const data = state.data;
                const post = await axios.post(url,data);
                return await post.json();
            }catch {
                err => console.log(err);
            }
        }
    }
})