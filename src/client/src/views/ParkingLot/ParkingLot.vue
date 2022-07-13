<template>
    <div class="dFlex">
        <v-btn color="error" to="/notavaliable">Busy</v-btn>
        <v-btn color="success" to="/avaliable">Free</v-btn>
        <v-btn to="/addpark">Add Parking</v-btn>
    </div>
    <ParkingCard />
</template>

<script>
import ParkingCard from '../../components/ParkingCard/ParkingCard.vue';
export default {
    components:{
        ParkingCard
    }
}
</script>

<style scoped>
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