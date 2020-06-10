<template>
    <div class="main-nav">
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="./" class="nav-link" aria-label="Home">
                        <svg viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.8l5-4.5 5 4.5V18z" class="svg-primary"/>
                            <path d="M7 10.2V18h2v-6h6v6h2v-7.8l-5-4.5z" opacity="0.3" class="svg-secondary"/>
                        </svg>
                        <span class="link-text">Home</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="./feeds" class="nav-link" aria-label="Feeds">
                        <svg viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <circle cx="6.2" cy="17.8" r="2.2" class="svg-primary"/>
                            <path d="m4 4.4v2.8c7 0 12.7 5.7 12.7 12.7h2.8C19.6 11.4 12.6 4.4 4 4.4Z" opacity="0.25" class="svg-secondary"/>
                            <path d="m4 10.1v2.8c3.9 0 7.1 3.2 7.1 7.1H13.9C13.9 14.5 9.5 10.1 4 10.1Z" opacity="0.5" class="svg-tertiary"/>
                        </svg>
                        <span class="link-text">Feeds</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="./library" class="nav-link" aria-label="Library">
                        <svg viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M20 4h-1v9l-3-2.25L13 13V4H8v12h12z" opacity=".3" class="svg-secondary"/>
                            <path d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zm18-6V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM15 4h2v5l-1-.75L15 9V4zM8 4h5v9l3-2.25L19 13V4h1v12H8V4z" class="svg-primary"/>
                        </svg>
                        <span class="link-text">Library</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="./downloads" class="nav-link" aria-label="Downloads">
                        <svg viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M14.17 11H13V5h-2v6H9.83L12 13.17z" opacity=".3" class="svg-secondary"/>
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" class="svg-primary"/>
                        </svg>
                        <span class="link-text">Downloads</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="./settings" class="nav-link" aria-label="Settings">
                        <svg viewBox="0 0 24 24" >
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" opacity=".3" class="svg-secondary"/>
                            <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" class="svg-primary"/></svg>
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

