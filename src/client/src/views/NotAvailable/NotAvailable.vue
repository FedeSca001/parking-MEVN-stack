<template>
    <h2>Busy</h2>
    <h3>Busy parking: {{items.length}}</h3>
    <ul class="cartCont">
        <li v-for="item in items"
            :key="item.number"
            class="cartSite">
                <p class="number">{{item.number}}</p>
        </li>
    </ul>
</template>

<script>
import { useParking } from '../../store/parkingSites';

export default {
    name: 'notavailable-comp',
    setup(){
        const usePark = useParking()
        const list = usePark.listSites;
        const items = list.filter( elem => elem.available === false )

        return {
            items
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    font-size: 3vw;
}
h3{
    text-align: center;
    font-size: 1.5vw;
}
.number{
    font-size: 2vw;
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
    width: 5vw;
    background-color: red;
    border-radius: 0.5vw;
    color: white;
    list-style: none;
}
</style>