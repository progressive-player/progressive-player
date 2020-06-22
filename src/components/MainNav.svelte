<script>
  import HomeIcon from "./Icons/HomeIcon.svelte";
  import FeedsIcon from "./Icons/FeedsIcon.svelte";
  import LibraryIcon from "./Icons/LibraryIcon.svelte";
  import DownloadsIcon from "./Icons/DownloadsIcon.svelte";
  import SettingsIcon from "./Icons/SettingsIcon.svelte";
</script>

<style>

</style>

<nav class="navbar">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a href="./" class="nav-link" aria-label="Home">
        <HomeIcon />
        <span class="link-text">Home</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="./feeds" class="nav-link" aria-label="Feeds">
        <FeedsIcon />
        <span class="link-text">Feeds</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="./library" class="nav-link" aria-label="Library">
        <LibraryIcon />
        <span class="link-text">Library</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="./downloads" class="nav-link" aria-label="Downloads">
        <DownloadsIcon />
        <span class="link-text">Downloads</span>
      </a>
    </li>
    <li class="nav-item sidebar-settings">
      <a href="./settings" class="nav-link" aria-label="Settings">
        <SettingsIcon />
      </a>
    </li>
  </ul>
</nav>
