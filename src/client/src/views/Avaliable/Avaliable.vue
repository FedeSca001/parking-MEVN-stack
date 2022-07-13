<template>
    <h2>Free</h2>
    <h3>Free parking: {{items.length}}</h3>
    <ul class="cartCont" >
        <li v-for="item in items"
            :key="item.number"
            class="cartSite">
                <p class="number">{{item.number}}</p>
            <v-btn :to="{name:'update-comp', params: {id:item.number} }" class="btnUpdate">update</v-btn>
        </li>
    </ul>
</template>

<script>
import { useParking } from '../../store/parkingSites';
export default {
    name: 'avaliable-comp',
    setup(){
        const usePark = useParking()
        const list = usePark.listSites;
        const items = list.filter(element=>element.avaliable === true)
        return {
            items
        }
    }
}
</script>

<style scoped>
.btnUpdate{
    font-size: 1.5vw;
    margin: 0.1vw;
    padding: 0.1vw;
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
    background-color: green;
    border-radius: 0.5vw;
    color: white;
    list-style: none;
}
</style>