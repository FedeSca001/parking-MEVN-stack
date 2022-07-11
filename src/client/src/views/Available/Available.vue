<template>
    <h2>Free</h2>
    <h3>Free parking: {{items.length}}</h3>
    <ul class="cartCont" >
        <li v-for="item in items"
            :key="item.id"
            class="cartSite">
                <p class="number">{{item.id}}</p>
        </li>
    </ul>
</template>

<script>
import { useParking } from '../../store/parkingSites';
export default {
    name: 'available-comp',
    setup(){
        const usePark = useParking()
        const list = usePark.listSites;
        const items = list.filter(element=>element.available === true)
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
    background-color: green;
    border-radius: 0.5vw;
    color: white;
    list-style: none;
}
</style>