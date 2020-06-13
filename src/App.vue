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

.nav-link svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: var(--text-secondary);
}

.nav-link:hover {
    color: var(--text-primary);
}

.nav-link .svg-primary {
    transition: calc(var(--transition-speed) + 50ms);
}

.nav-link .svg-secondary {
    transition: calc(var(--transition-speed) + 100ms);
}

.nav-link .svg-tertiary {
    transition: calc(var(--transition-speed) + 200ms);
}

.nav-link:hover .svg-primary {
    fill: var(--text-primary);
    opacity: 100%;
}

.nav-link:hover .svg-secondary {
    fill: var(--text-primary);
    opacity: 50%;
}

.nav-link:hover .svg-tertiary {
    fill: var(--text-primary);
    opacity: 30%;
}

/* Small screens */
@media only screen and (max-width: 750px) {
    main {
        margin: 0;
        padding: 3.5rem;
    }
}
</style>
