<template>
    <div class="main-nav">
        <nav class="navbar">
            <a href="/" class="nav-button">
                <svg viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                Home
            </a>
            <a href="/feeds" class="nav-button">
                <svg viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="6.2" cy="17.8" r="2.2"/>
                    <path d="M4 4.4v2.8c7 0 12.7 5.7 12.7 12.7h2.8c0-8.6-7-15.6-15.6-15.6zm0 5.7v2.8c3.9 0 7.1 3.2 7.1 7.1h2.8c0-5.5-4.4-9.9-9.9-9.9z"/>
                </svg>
                Feeds
            </a>
            <a href="/playlists" class="nav-button">
                <svg viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/>
                    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z"/>
                </svg>
                Playlists
            </a>
            <a href="/downloads" class="nav-button">
                <svg viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                Downloads
            </a>
        </nav>
    </div>
</template>

<script lang="ts">

export default {
    name: "MainNav",
};
</script>

<style scoped>
.navbar {
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    background-color: #222937;
    color: white;
}
.nav-button {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    min-width: 6rem;
    color: #a4a4a4;
    text-decoration: none;
}

.nav-button:hover {
    color: white;
}

svg {
    width: 25px;
    height: 25px;
    fill: currentColor;
}

.a-exact-active {
    color: white;
}
</style>
