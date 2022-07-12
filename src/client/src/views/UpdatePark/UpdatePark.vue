<template>
  <div class="cont-form">
      <h2>Park N°: {{listPark.listSites[$route.params.id-1].number}}</h2>
    <v-text-field
    v-model="nameCard"
    label="Complete Name"
    required
    ></v-text-field>
        <v-switch
        v-model="check"
        label="avaliable"
        hide-details
    ></v-switch>
    <v-btn @click="updateOne(listPark.listSites[$route.params.id-1].number,
                                this.nameCard,
                                this.check)">
        Send
    </v-btn>
  </div>
</template>

<script>
import axios from 'axios';
import {
    useParking
} from '../../store/parkingSites';
export default {
    data:()=>({
        nameCard: "",
        check: Boolean
    }),
    setup(){
        const listPark = useParking();
        const updateOne = async (numberOfPark,name,check)=>{
            if(check === true){
                check = true
            } else{
                check = false
            }
            const url = 'http://localhost:5000/sites/park/' + numberOfPark;
            const dataObject =
                {
                name: name,
                avaliable: check
                }
            const data = await axios.put(url,dataObject);
            const response = await data.data;
            console.log(response);
            listPark.getData();
        }
        return {
            listPark,
            updateOne
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