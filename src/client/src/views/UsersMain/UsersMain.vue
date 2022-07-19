<template>
  <p v-for="item in data.usersList" :key="item.name">{{item.name}}</p>
  <p>users</p>
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

<style>

</style>