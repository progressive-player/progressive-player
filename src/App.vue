<template>
  <div id="application">
    <main-nav></main-nav>
    <top-bar></top-bar>
    <home></home> 
  </div>
</template>

<script lang="ts">
import Home from "@/views/Home.vue";
import MainNav from "@/components/MainNav.vue";
import TopBar from "@/components/TopBar.vue";
import "@/assets/main.css";

export default {
    name: "App",
    components: {
        Home,
        MainNav,
        TopBar
    }
};
</script>

