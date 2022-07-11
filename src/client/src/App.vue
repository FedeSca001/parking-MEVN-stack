<template>
  <v-app>
    <v-app-bar>
      <NavBar/>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar/NavBar.vue";


export default {
    name: "App",
    components: { NavBar }
}
</script>
