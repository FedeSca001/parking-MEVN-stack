<template>
  <div 
    class="cont-form">
        <v-text-field
        v-model="name"
        label="Complete Name"
        required
        ></v-text-field>
        <v-text-field
        v-model="numb"
        label="Complete Number"
        type="number"
        required
        ></v-text-field>
        <v-btn @click="sendPark">
            Send
        </v-btn>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data:()=>({
        name: '',
        numb: ''
    }),
    methods:{
        sendPark: async ()=>{
            try{
                const url = 'http://localhost:5000/sites/park'
                const data = {
                    number: Number(this.numb),
                    name: this.name,
                    available: true
                }
                const post = await axios.post( url , data);
                const resp = await post.json();
                console.log(resp);
            }catch{
                err => console.log(err)
            }
    }}
}
</script>

<style scoped>
.cont-form{
    margin: 3vw auto;
    width: 50vw;
}
</style>