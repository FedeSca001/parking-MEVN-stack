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
         <v-switch
            v-model="check"
            label="avaliable"
            hide-details
        ></v-switch>
        <v-btn @click="sendPark(this.numb, this.name, this.check)">
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
        check: Boolean,
    }),
    setup(){
        const sendPark = async (numb, name, check)=>{
            if(check === true){
                check = true
            } else{
                check = false
            }
        const url = 'http://localhost:5000/sites/park'
        const data = {
            number: numb,
            name: name,
            avaliable: check,
            date: {
                hour:`${new Date().getHours()}:${new Date().getMinutes()}`,
                fecha: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
                }
        }
        const post = await axios.post( url , data);
        console.log(post);
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