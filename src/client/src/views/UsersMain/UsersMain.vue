<template @change="get.getUsers()">
        <button
                @click="
                        () => {
                                swichBtn = !swichBtn;
                        }
                "
                class="swich"
        >
                Add User
        </button>
        <button
                @click="
                        () => {
                                swichFilter = !swichFilter;
                        }
                "
        >
                Filter
        </button>
        <AddUser v-if="swichBtn" />
        <FilterUsers v-if="swichFilter" :sendProp="get.listUsers" />
        <ul v-else>
                <h2 class="title">Users</h2>
                <li
                        v-for="item in get.listUsers"
                        :key="item.name"
                        class="liItem"
                >
                        Name: {{ item.name }} | | Age: {{ item.age }} | | Dni:
                        {{ item.dni }} | | Phone: {{ item.phone }} | | Mail:
                        {{ item.mail }}
                </li>
        </ul>
</template>

<script>
import AddUser from "@/components/AddUser/AddUser.vue";
import FilterUsers from "@/components/FilterUsers/FilterUsers.vue";
import { useUsers } from "../../store/users";
export default {
        components: { AddUser, FilterUsers },
        data() {
                return {
                        swichBtn: false,
                        swichFilter: false,
                };
        },
        setup() {
                const get = useUsers();
                get.getUsers();
                return {
                        get,
                };
        },
};
</script>

<style scoped>
.swich {
        margin: 1vw 2vw;
        font-size: 1vw;
        padding: 1vw;
        border: solid black 2.5px;
        background-color: brown;
        color: white;
        border-radius: 1.5vw;
}
.title {
        margin: 2vw 4vw;
        font-size: 3vw;
}
.liItem {
        font-size: 1.9vw;
        font-weight: 700;
        margin: 0.5vw 5vw;
        list-style: none;
}
</style>
