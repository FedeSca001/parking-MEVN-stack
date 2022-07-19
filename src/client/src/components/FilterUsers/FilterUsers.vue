<template>
  <h2>filter</h2>
  <input type="text" @input="(e)=>{filterByName(e.target.value);}">
  <ul>
      <li v-for="item in filteredOut" :key="item.id">{{item.name}}</li>
  </ul>
</template>

<script>
export default {
    data(){
        return{
            list: this.sendProp,
            filteredOut: []
        }
    },
    props: ['sendProp'],
    methods:{
        filterByName(e){
            let input = e
            this.filteredOut = this.list.map((element)=>{
                element.name === input
            })
            console.log('In='+e+'-----'+ 'filtredout'+this.filteredOut);
        }
    }
}
</script>

<style>

</style>