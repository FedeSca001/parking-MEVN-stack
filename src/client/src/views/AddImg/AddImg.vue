<template>
    <form 
        enctype="multipart/form-data"
        @submit.prevent="uploadImg">
        <label for="file">Upload file</label>
        <input
            type="file"
            ref="file"
            @change="selectFile">
        <input type="submit">
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            file: ""
        }
    },
    methods: {
        selectFile(){
            this.file = this.$refs.file.files[0];
            console.log(`- - this file ${this.file}`);
        },
        async uploadImg(){
            try {
                await axios.post('/single', {storage: this.file});
            } catch {
                err => console.log(err);
            }
        }
    }
}
</script>

<style>

</style>