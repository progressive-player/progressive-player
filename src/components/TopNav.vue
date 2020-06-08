<template>
    <div class="top-nav">
        <nav class="navbar justify-content-between navbar-dark">
            <a href="/" class="navbar-brand">
                <svg viewBox="0 0 24 24" fill="#66F5A1" width="25px" height="25px">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z" />
                </svg>
                Progressive Player
            </a>
            <div>
                <svg viewBox="0 0 24 24" width="25" height="25" fill="white">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M19.1 12.9c0-0.3 0.1-0.6 0.1-0.9 0-0.3 0-0.6-0.1-0.9l2-1.6c0.2-0.1 0.2-0.4 0.1-0.6l-1.9-3.3c-0.1-0.2-0.4-0.3-0.6-0.2l-2.4 1c-0.5-0.4-1-0.7-1.6-0.9L14.4 2.8c0-0.2-0.2-0.4-0.5-0.4h-3.8c-0.2 0-0.4 0.2-0.5 0.4L9.3 5.4C8.7 5.6 8.1 5.9 7.6 6.3L5.2 5.3c-0.2-0.1-0.5 0-0.6 0.2L2.7 8.9C2.6 9.1 2.7 9.3 2.9 9.5l2 1.6C4.8 11.4 4.8 11.7 4.8 12s0 0.6 0.1 0.9l-2 1.6c-0.2 0.1-0.2 0.4-0.1 0.6l1.9 3.3c0.1 0.2 0.4 0.3 0.6 0.2l2.4-1c0.5 0.4 1 0.7 1.6 0.9l0.4 2.5c0.1 0.2 0.2 0.4 0.5 0.4h3.8c0.2 0 0.4-0.2 0.5-0.4l0.4-2.5c0.6-0.2 1.1-0.6 1.6-0.9l2.4 1c0.2 0.1 0.5 0 0.6-0.2l1.9-3.3c0.1-0.2 0.1-0.5-0.1-0.6L19.1 12.9zM12 15.6c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6S14 15.6 12 15.6z"/>
                </svg>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">

export default {
    name: "TopNav",
};
</script>

<style scoped>
.navbar {
    background-color: #222937;
    font-family: "Helvetica", sans-serif;
    font-weight: 500;
    
}
</style>
