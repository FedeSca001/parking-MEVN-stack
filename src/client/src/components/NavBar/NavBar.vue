<template>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/uploadImg">upload img</v-btn>
        <v-btn to="/usersMain">Users</v-btn>
        <DateComp/>
</template>

<script>

import DateComp from "../DateComp/DateComp.vue";
export default {
    components: {DateComp},
}
</script>

<style scoped>

</style>