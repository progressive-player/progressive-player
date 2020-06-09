<template>
  <div id="application">
    <main-nav></main-nav>
    <home></home> 
  </div>
</template>

<script lang="ts">
import MainNav from "@/components/MainNav.vue";
import Home from "@/views/Home.vue";
import "@/assets/main.css";

export default {
    name: "App",
    components: {
        MainNav,
        Home
    }
};
</script>
