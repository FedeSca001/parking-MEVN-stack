<template>
    <form class="inputContain"
        @submit="user.addUser(this.name, this.dni, this.age, this.phone, this.mail)">
        <div>
            <label>Full name</label>
            <input placeholder="Full name" type="text" v-model="name">
        </div>
        <div>
            <label>Age</label>
            <input placeholder="Age" type="number" v-model="age">
        </div>
        <div>
            <label>Dni</label>
            <input placeholder="Dni" type="number" v-model="dni">
        </div>
        <div>
            <label>Phone</label>
            <input placeholder="Phone" type="number" v-model="phone">
        </div>
        <div>
            <label>E-mail</label>
            <input placeholder="e-mail" type="text" v-model="mail">
        </div>
        <button type="submit">Send</button>
    </form>
</template>

<script>
import { useUsers } from '../../store/users'
export default {
    data(){
        return{
            name: '',
            age: '',
            dni: '',
            phone: '',
            mail:'',
        }
    },
    setup(){
        const user = useUsers();
        const newUser = ()=>{
            user.addUser(this.name, this.dni, this.age, this.phone, this.mail);
        }
        return {
            user,
            newUser
        }
    }
}
</script>

<style style>
.inputContain{
    border: solid red 2px;
    width: 80vw;
    margin: 2vw 5vw;
}
.inputContain input{
    font-size: 2vw;
    width: 10vw;
    margin: 0vw 2vw;
    border: solid black 1px;
    border-radius: 0.6vw;
}
.inputContain label{
    font-size: 1.6vw;
    width: 6vw;
    background-color: gold;
}
</style>