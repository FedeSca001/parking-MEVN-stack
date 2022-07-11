<template>
      <section class="reference">
        <h3>Reference</h3>
        <p class="free">Free</p>
        <p class="Busy">Busy</p>
        <p class="outServ">Out of service</p>
    </section>
</template>

<script>
export default {
    name:'reference-comp'
}
</script>

<style>
    .reference{
    display: flex;
    flex-wrap: wrap;
    border: 2px solid red;
    border-radius: 1vw;
    padding: 0.1vw 1vw;
    margin: 1vw;
    width: max-content;
}
.reference p {
    margin: 0vw 3vw;
    color: white;

    padding: 0.1vw 1vw;
}
.free{
    background-color: green;
}
.Busy{
    background-color: red;
}
.outServ{
    background-color: black;
}
</style>