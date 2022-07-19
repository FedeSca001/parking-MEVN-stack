<template>
  <h2 class="title">users</h2>
  <AddUser/>
  <ul>
    <li v-for="item in data.listUsers" 
        :key="item.name"
        class="liItem">
            Name: {{item.name}} | |
            Age: {{item.age}} | |
            Dni: {{item.dni}} | |
            Phone: {{item.phone}} | |
            Mail: {{item.mail}}
    </li>
  </ul>
</template>

<script>
import AddUser from '@/components/AddUser/AddUser.vue'
import { useUsers } from '../../store/users'
export default {
  components: { AddUser },
    setup(){
        const data = useUsers()
        data.getUsers()
        return{
            data
        }
    }
}
</script>

<style scoped>
.title{
    margin: 2vw 4vw;
    font-size: 3vw;
}
.liItem{
    font-size: 1.9vw;
    font-weight: 700;
    margin: 0.5vw 5vw;
    list-style: none;
}
</style>