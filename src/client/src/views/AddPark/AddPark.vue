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
        <v-btn @click="sendPark(this.numb, this.name)">
            Send
        </v-btn>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data: ()=>({
        name: "",
        numb: 0,
    }),
    setup(){
        const sendPark = async (numb, name)=>{
        const url = 'http://localhost:5000/sites/park'
        const data = {
            number: numb,
            name: name,
            available: true
        }
        const post = await axios.post( url , data);
        const resp = await post.data;
        console.log(resp);
    }
    return{
        sendPark
    }
    }
}
</script>

<style scoped>
.cont-form{
    margin: 3vw auto;
    width: 50vw;
}
</style>