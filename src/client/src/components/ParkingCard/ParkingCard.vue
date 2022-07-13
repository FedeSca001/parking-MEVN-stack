<template>
  <ul class="cartCont">
    <li v-for="site in listPark.listSites"
        :key="site.id"
        class="cartSite">
        <v-btn
            class="crossDelete"
            @click="delettePark(site.number)">
                X
        </v-btn>
        <p class="number">
            {{site.number}}
        </p>
        <div v-if="site.avaliable" class="free">
            Free
        </div>
        <div v-else class="Busy">
            {{site.name.charAt(0).toUpperCase()}}{{ site.name.slice(1).toLowerCase()}}
        </div>
        <v-btn :to="{name:'update-comp', params: {id:site.number} }" class="btnUpdate">UPDATE</v-btn>
        <p class="dateText">{{site.date.hour}}</p>
        <p class="dateText">{{site.date.fecha}}</p>
    </li>
</ul>
</template>

<script>
import axios from 'axios';
import {
    useParking
} from '../../store/parkingSites';
export default {
    setup() {
        const listPark = useParking();
        listPark.getData()
        const delettePark = async (idPark) => {
            const confirmar = confirm('¿Seguro?');
            if (confirmar) {
                try {
                    const url = 'http://localhost:5000/sites/park/' + idPark;
                    const del = await axios.delete(url)
                    console.log(del);
                    listPark.getData();
                } catch {
                    err => console.log(err);
                }
            }
        }
        return {
          listPark,
          delettePark,
        }
    }
}
</script>

<style scoped>
.btnUpdate{
    color: gray;
    background-color: white;
    font-size: 1.6vw;
    margin: 0.5vw auto;
    width: 80%;
    height: 3vw;
    padding: 0vw;
    border-radius: 1vw;
}
.cartCont{
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    padding: 5vw;
}
.cartSite{
    text-align: center;
    padding: 0.5vw 0vw;
    width: 10vw;
    background-color: rgb(87, 87, 87);
    border-radius: 0.5vw;
    color: white;
    list-style: none;
}
.dateText{
    margin: 0.5vw auto;
    font-size: 1.3vw;
}
.crossDelete{
    width: 1vw;
    height: 2vw;
    font-size: 1vw;
    background-color: rgb(190, 7, 7);
    margin: 0vw 1vw;
    padding: 0;
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
</style>