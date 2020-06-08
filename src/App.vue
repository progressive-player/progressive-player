<template>
  <div id="app">
    <main-nav></main-nav>
    <home></home> 
  </div>
</template>

<script lang="ts">
import TopNav from "@/components/TopNav.vue";
import MainNav from "@/components/MainNav.vue";
import Home from "@/views/Home.vue";
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
