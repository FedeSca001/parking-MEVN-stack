<template>
  <p @click="updateOne(listPark.listSites[$route.params.id-1].number)">update{{listPark.listSites[$route.params.id-1].name}}</p>
</template>

<script>
import {
    useParking
} from '../../store/parkingSites';
export default {
    setup(){
        const listPark = useParking();
        const updateOne = (numberOfPark)=>{
            const url = 'http://localhost:5000/sites/park/' + numberOfPark;
            console.log(url);
        }
        return {
            listPark,
            updateOne
        }
    }
}
</script>

<style>

</style>