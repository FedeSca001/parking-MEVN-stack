<template>
    <div class="cardInfo">
        <h3>{{site[$route.params.id-1].id}}</h3>
        <h4>State:</h4>
        <p v-if="site[$route.params.id-1].available" class="free">Free</p>
        <p v-else class="Busy">Bussy</p>
    </div>
    <section v-if="site[$route.params.id-1].available">
        <v-btn>Close</v-btn>
    </section>
    <section v-else>
        <form-card/>
    </section>
</template>

<script>

import FormCard from './FormCard.vue';
import axios from 'axios'

export default {
  components: { FormCard },
    setup(){
        let sites = [];
        async function getData(){
            try{
                const url = 'http://localhost:5000/sites/park/1';
                const r = await axios.get(url);
                const respuesta = await r.json();
                sites = respuesta;
                console.log(sites);
            }catch{
                err => console.log(err)
            }
        }
        getData()
        return{
            sites
            }
    }
}
</script>

<style scoped>
p{
    margin: 2vw;
    padding: 1vw;
    width: 10vw;
    font-size: 1.5vw;
    font-weight: 600;
    color: white;
}
.cardInfo{
    width: 90vw;
    margin: 1vw auto;
    padding: 1.5vw;
}
.free{
    background-color: green;
}
.Busy{
    background-color: red;
}
</style>