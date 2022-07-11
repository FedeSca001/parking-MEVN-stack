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
        }
    }),
    actions:{
        addUser: async (state)=>{
            try {
                const url = 'http://localhost:5000/users/send';
                const data = state.data;
                const post = await axios.post(url,data);
                const response = await post.json();
                console.log(response);
            }catch {
                err => console.log(err);
            }
        }
    }
})