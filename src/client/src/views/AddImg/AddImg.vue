<template>

    <input type="file" >
    <button @click="addimg">Add img</button>    

</template>

<script>
import axios from 'axios'
export default {
    data:()=>({

    }),
    setup(){
        const url = 'http://localhost:5000/single'
        const addimg = axios.post(url, {storage : 'this.img'})
        console.log(addimg.data);
        return {
            addimg
        }
    }
}
</script>

<style>

</style>