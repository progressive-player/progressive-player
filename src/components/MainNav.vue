<template>
    <div class="main-nav">
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="/" class="nav-link" aria-label="Home">
                        <svg viewBox="0 0 24 24">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                        <span class="link-text">Home</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/feeds" class="nav-link" aria-label="Feeds">
                        <svg viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="6.2" cy="17.8" r="2.2"/>
                            <path d="M4 4.4v2.8c7 0 12.7 5.7 12.7 12.7h2.8c0-8.6-7-15.6-15.6-15.6zm0 5.7v2.8c3.9 0 7.1 3.2 7.1 7.1h2.8c0-5.5-4.4-9.9-9.9-9.9z"/>
                        </svg>
                        <span class="link-text">Feeds</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/playlists" class="nav-link" aria-label="Playlists">
                        <svg viewbox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/>
                            <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z"/>
                        </svg>
                        <span class="link-text">Playlists</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/downloads" class="nav-link" aria-label="Downloads">
                        <svg viewbox="0 0 24 24">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                        <span class="link-text">Downloads</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/settings" class="nav-link" aria-label="Settings">
                        <svg viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19.1 12.9c0-0.3 0.1-0.6 0.1-0.9 0-0.3 0-0.6-0.1-0.9l2-1.6c0.2-0.1 0.2-0.4 0.1-0.6l-1.9-3.3c-0.1-0.2-0.4-0.3-0.6-0.2l-2.4 1c-0.5-0.4-1-0.7-1.6-0.9L14.4 2.8c0-0.2-0.2-0.4-0.5-0.4h-3.8c-0.2 0-0.4 0.2-0.5 0.4L9.3 5.4C8.7 5.6 8.1 5.9 7.6 6.3L5.2 5.3c-0.2-0.1-0.5 0-0.6 0.2L2.7 8.9C2.6 9.1 2.7 9.3 2.9 9.5l2 1.6C4.8 11.4 4.8 11.7 4.8 12s0 0.6 0.1 0.9l-2 1.6c-0.2 0.1-0.2 0.4-0.1 0.6l1.9 3.3c0.1 0.2 0.4 0.3 0.6 0.2l2.4-1c0.5 0.4 1 0.7 1.6 0.9l0.4 2.5c0.1 0.2 0.2 0.4 0.5 0.4h3.8c0.2 0 0.4-0.2 0.5-0.4l0.4-2.5c0.6-0.2 1.1-0.6 1.6-0.9l2.4 1c0.2 0.1 0.5 0 0.6-0.2l1.9-3.3c0.1-0.2 0.1-0.5-0.1-0.6L19.1 12.9zM12 15.6c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6S14 15.6 12 15.6z"/>
                        </svg>
                        <span class="link-text">Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">

export default {
    name: "MainNav",
};
</script>

