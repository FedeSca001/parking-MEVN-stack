<template>
  <p>Hour: {{date.getHours()}}:{{date.getMinutes()}} - Day: {{date.getDate()}}/{{date.getMonth()+1}}/{{date.getFullYear()}}</p>
</template>

<script>
export default {
    setup(){
        const date = new Date()
        return {
            date
        }
    }
}
</script>

<style>

</style>