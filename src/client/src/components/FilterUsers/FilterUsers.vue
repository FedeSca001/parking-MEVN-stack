<template>
        <h2 class="title">Filter</h2>
        <input
                type="text"
                placeholder="Name filter"
                @input="
                        (e) => {
                                filterByName(e.target.value);
                        }
                "
        />
        <input
                type="number"
                placeholder="Age filter"
                @input="
                        (e) => {
                                filterByAge(e.target.value);
                        }
                "
        />
        <input
                type="number"
                placeholder="Dni filter"
                @input="
                        (e) => {
                                filterByDni(e.target.value);
                        }
                "
        />
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
                                                return nameString === input;
                                        }
                                );
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
                                                        element.age
                                                );
                                                return ageNumber === input;
                                        }
                                );
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
                                                        element.dni
                                                );
                                                return ageNumber === input;
                                        }
                                );
                        }
                },
        },
};
</script>

<style scoper>
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
