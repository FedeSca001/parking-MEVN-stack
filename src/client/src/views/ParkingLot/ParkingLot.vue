<template>
<Reference/>
<div class="dFlex">
    <v-btn color="error" to="/notavailable">Busy</v-btn>
    <v-btn color="success" to="/available">Free</v-btn>
    <v-btn to="/addpark">Add Parking</v-btn>
    <v-btn @click="listPark.getData()">Refresh</v-btn>
</div>
    <ul class="cartCont">
        <li v-for="site in listPark.listSites"
            :key="site.id"
            class="cartSite">
            <v-btn
                class="crossDelete"
                @click="deletePark(site.number)">
                    X
            </v-btn>
            <p class="number">
                {{site.number}}
            </p>
            <div v-if="site.available" class="free">
                Free
            </div>
            <div v-else-if="site.available === 'outOfService'" class="outServ">
                Out of service
            </div>
            <div v-else class="Busy">
                {{site.name.charAt(0).toUpperCase()}}{{ site.name.slice(1).toLowerCase()}}
            </div>
        </li>
    </ul>
</template>

<script>
import axios from 'axios';
import Reference from '../../components/Reference/Reference.vue';
import {useParking} from '../../store/parkingSites';
export default {
    components:{Reference},
    data:()=>({
        sites: useParking() || []
    }),
    setup(){
        const listPark = useParking();
        listPark.getData()
        const deletePark = async (idPark)=>{
            try{
                const url = 'http://localhost:5000/sites/park/'+idPark;
                const del = await axios.delete(url)
                console.log(del);
            }catch{
                err => console.log(err);
            }
        }
        return{
            listPark,deletePark
        }
    }
}
</script>

<style scoped>
.crossDelete{
    width: 1vw;
    height: 1vw;
    font-size: 0.7vw;
    background-color: rgb(190, 7, 7);
    margin: 0vw 1vw;
    padding: 0;
}
.reference{
    display: flex;
    flex-wrap: wrap;
    border: 2px solid red;
    border-radius: 1vw;
    padding: 0.1vw 1vw;
    margin: 1vw;
    width: max-content;
}
.reference p {
    margin: 0vw 3vw;
    color: white;

    padding: 0.1vw 1vw;
}
.number{
    font-size: 4vw;
    font-weight: 600;
}
.free{
    background-color: green;
}
.Busy{
    background-color: red;
}
.outServ{
    background-color: black;
}
.cartCont{
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    padding: 5vw;
}
.cartSite{
    text-align: center;
    padding: 1.5vw 0vw;
    width: 10vw;
    background-color: rgb(87, 87, 87);
    border-radius: 0.5vw;
    color: white;
    list-style: none;
}
.dFlex{
    margin: 1vw;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5vw;
}
.btnGo{
    margin: 0.3vw auto; 
    padding: 0.1vw;
    width: 0.5vw;
    height: 1.5vw;
    font-size: 1.2vw;
}
</style>