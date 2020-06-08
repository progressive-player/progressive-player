<template>
  <div id="app">
    <nav class="navbar top-nav"></nav>
    <nav class="navbar main-nav"></nav>
    <!-- <top-nav></top-nav> -->
    <home></home> 
    <!-- <main-nav></main-nav> -->
  </div>
</template>

<script lang="ts">
import TopNav from "@/components/TopNav.vue";
import MainNav from "@/components/MainNav.vue";
import Home from "@/views/Home.vue";
// import "bootstrap/dist/css/bootstrap.css"
import "@/assets/main.css";

export default {
    name: "App",
    components: {
        TopNav,
        MainNav,
        Home
    }
};
</script>
