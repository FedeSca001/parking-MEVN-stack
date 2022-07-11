<template>
<Reference/>
<div class="dFlex">
    <v-btn color="error" to="/notavailable">Busy</v-btn>
    <v-btn color="success" to="/available">Free</v-btn>
    <v-btn to="/addpark">Add Parking</v-btn>
    <v-btn @click="getData(this.sites)">get</v-btn>
</div>
    <ul class="cartCont">
        <li v-for="site in sites"
            :key="site.id"
            class="cartSite">
            <p class="number">
                {{site.id}}
            </p>
            <div v-if="site.available" class="free">
                Free
            </div>
            <div v-else-if="site.available === 'outOfService'" class="outServ">
                Out of service
            </div>
            <div v-else class="Busy">
                Busy
            </div>
            <v-btn class="btnGo"
                :to="{name:'setting', params: {id:site.id}}">
                GO</v-btn>
        </li>
    </ul>
</template>

<script>
import Reference from '../../components/Reference/Reference.vue';
import axios from 'axios';
export default {
    components:{Reference},
    data:()=>({
        sites: []
    }),
    methods:{
        getData: async (element)=>{
            try{
                const url = 'http://localhost:5000/sites/park';
                const r = await axios.get(url);
                const respuesta = await r.json();
                element = await respuesta;
                console.log(respuesta);
                console.log(element);
            }catch{
                err => console.log(err)
            }
        }
    },
}
</script>

<style scoped>
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
    font-size: 2vw;
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
    width: 5vw;
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