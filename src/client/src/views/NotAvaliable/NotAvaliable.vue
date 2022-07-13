<template>
    <h2>Busy</h2>
    <h3>Busy parking: {{items.length}}</h3>
    <ul class="cartCont">
        <li v-for="item in items"
            :key="item.number"
            class="cartSite">
                <p class="number">{{item.number}}</p>
                <p>{{item.name}}</p>
                <v-btn :to="{name:'update-comp', params: {id:item.number} }" class="btnUpdate">UPDATE</v-btn>

        </li>
    </ul>
</template>

<script>
import { useParking } from '../../store/parkingSites';

export default {
    name: 'notavaliable-comp',
    setup(){
        const usePark = useParking()
        const list = usePark.listSites;
        const items = list.filter( elem => elem.avaliable === false )

        return {
            items
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
h2{
    text-align: center;
    font-size: 3vw;
}
h3{
    text-align: center;
    font-size: 1.5vw;
}
.number{
    font-size: 4vw;
    font-weight: 600;
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
    background-color: red;
    border-radius: 0.5vw;
    color: white;
    list-style: none;
}
</style>