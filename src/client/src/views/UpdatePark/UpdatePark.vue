<template>
    <div class="cont-form">
        <div v-if="!listPark.listSites[$route.params.id-1].avaliable">
            <h3>N°: {{listPark.listSites[$route.params.id-1].number}}</h3>
            <h3>Name: {{listPark.listSites[$route.params.id-1].name.charAt(0).toUpperCase()}}{{listPark.listSites[$route.params.id-1].name.slice(1).toLowerCase()}}</h3>
        </div>
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
        <v-btn 
            @click="updateOne(listPark.listSites[$route.params.id-1].number,
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
        check: true
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
            console.log(data.data);
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