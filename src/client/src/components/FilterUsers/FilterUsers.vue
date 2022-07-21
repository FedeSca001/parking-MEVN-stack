<template>
        <h2 class="title">Filter</h2>
        <div class="containInput">
        <input
                type="text"
                placeholder="Name filter"
                @input="
                        (e) => {filterByName(e.target.value);}"/>
        <input
                type="number"
                placeholder="Age filter"
                @input="
                        (e) => {filterByAge(e.target.value);}"/>
        <input
                type="number"
                placeholder="Dni filter"
                @input="
                        (e) => {filterByDni(e.target.value);}"/>
        </div>
        <ul>
                <li v-for="item in filteredOut" :key="item.id" class="liItem">
                        Name: {{ item.name }} | | Age: {{ item.age }} | | Dni:
                        {{ item.dni }} | | Phone: {{ item.phone }} | | Mail:
                        {{ item.mail }}
                </li>
        </ul>
</template>

<script>
export default {
        data() {
                return {
                        list: this.sendProp,
                        filteredOut: [],
                };
        },
        props: ["sendProp"],
        methods: {
                filterByName(e) {
                        let input = e.toLowerCase();
                        if (input === "") {
                                return (this.filteredOut = []);
                        } else {
                                this.filteredOut = this.list.filter(
                                        (element) => {
                                                const nameString =
                                                        element.name.toLowerCase();
                                                return nameString === input;});
                        }
                },
                filterByAge(e) {
                        let input = Number(e);
                        if (input == "" || input == 0) {
                                return (this.filteredOut = []);
                        } else {
                                this.filteredOut = this.list.filter(
                                        (element) => {
                                                const ageNumber = Number(
                                                        element.age);
                                                return ageNumber === input;});
                        }
                },
                filterByDni(e) {
                        let input = Number(e);
                        if (input == "" || input == 0) {
                                return (this.filteredOut = []);
                        } else {
                                this.filteredOut = this.list.filter(
                                        (element) => {
                                                const ageNumber = Number(
                                                        element.dni);
                                                return ageNumber === input;});
                        }
                },
        },
};
</script>

<style scoper>
.containInput{
        width: 40vw;
        margin: 1vw 4vw;
        border: solid black 2.5px;
        background-color: brown;
        border-radius: 2.5vw;
}
.containInput input {
        background-color: white;
        border-radius: 2vw;
        margin: 0.5vw;
        font-size: 0.8vw;
        padding: 0.3vw 0.8vw;
}
.title {
        margin: 2vw 4vw;
        font-size: 2vw;
}
.liItem {
        font-size: 1.4vw;
        font-weight: 700;
        margin: 0.5vw 5vw;
        list-style: none;
}
</style>
