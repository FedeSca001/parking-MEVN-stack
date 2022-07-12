<template>
    <Reference/>
    <div class="dFlex">
        <v-btn color="error" to="/notavaliable">Busy}</v-btn>
        <v-btn color="success" to="/avaliable">Free</v-btn>
        <v-btn to="/addpark">Add Parking</v-btn>
        <v-btn @click="listPark.getData()">Refresh</v-btn>
    </div>
    <ParkingCard />
</template>

<script>
import Reference from '../../components/Reference/Reference.vue';
import {useParking} from '../../store/parkingSites';
import ParkingCard from '../../components/ParkingCard/ParkingCard.vue';
export default {
    components:{Reference, ParkingCard},
    setup(){
        const listPark = useParking();
        listPark.getData()
        return{
            listPark,
        }
    }
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