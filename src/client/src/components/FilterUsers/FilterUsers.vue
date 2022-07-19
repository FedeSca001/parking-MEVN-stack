<template>
  <p v-for="item in usersProps" :key="item.id">filter</p>
</template>

<script>
export default {
    props: ['usersProps'],
}
</script>

<style>

</style>