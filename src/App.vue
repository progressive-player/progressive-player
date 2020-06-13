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

export default {
    name: "App",
    components: {
        Home,
        MainNav,
        TopBar
    }
};
</script>

<style>
:root {
    font-size: 12px;
    font-family: "Helvetica", sans-serif;
    --text-primary: white;
    --text-secondary: #a4a4a4;
    --bg-primary: #0c1118;
    --bg-secondary: #222937;
    --bg-tertiary: #55678a;
    --transition-speed: 100ms;
}

body {
    color: white;
    text-decoration: none;
    background-color: var(--bg-primary);
    margin: 0;
    padding: 0;
}

h1 {
    text-align: center;
}

main {
    margin-left: 5rem;
    margin-right: 1rem;
    line-height: 1.6;
    padding: 1rem;
}

a {
    -webkit-tap-highlight-color: transparent;
}

/* Small screens */
@media only screen and (max-width: 750px) {
    main {
        margin: 0;
        padding: 3.5rem;
    }
}
</style>
