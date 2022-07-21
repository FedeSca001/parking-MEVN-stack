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
        <v-btn type="submit" class="btnSubmit">Send</v-btn>
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
        return {
            user,
        }
    }
}
</script>

<style style>
.btnSubmit{
    padding: 1vw;
    margin: 0.5vw 1vw;
    border-radius: 1vw;
    background-color: yellowgreen;
    font-size: 1.5;
    font-weight: 800;
}
.inputContain{
    padding: 1.5vw;
    border: solid red 2px;
    width: 80vw;
    margin: 2vw 5vw;
}
.inputContain input{
    font-size: 1vw;
    width: 10vw;
    margin: 0vw 2vw;
    border: solid black 1px;
    border-radius: 0.6vw;
}
.inputContain label{
    font-size: 1vw;
    width: 6vw;
    font-weight: 700;
}
</style>