<template>
  <h2 class="title">users</h2>
  <ul>
    <li v-for="item in data.listUsers" 
        :key="item.name"
        class="liItem">
            <h4>
                Name: {{item.name}} | |
                Age: {{item.age}} | |
                Dni: {{item.dni}} | |
                Phone: {{item.phone}} | |
                Mail: {{item.mail}}
            </h4>
    </li>
  </ul>
</template>

<script>
import { useUsers } from '../../store/users'
export default {
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
}
.liItem{
    margin: 0.5v 4.5vw; 
}
</style>