<template>
        <h2 class="title">filter</h2>
        <input
                type="text"
                placeholder="Name filter"
                @input="
                        (e) => {
                                filterByName(e.target.value);
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
                        let input = e;
                        this.filteredOut = this.list.filter((element) => {
                                return element.name == input;
                                //console.log(element.name + "---" + input);
                        });
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
