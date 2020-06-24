<script>
  import LogoIcon from "./Icons/LogoIcon.svelte";
  import SettingsIcon from "./Icons/SettingsIcon.svelte";
</script>

<style>

</style>

<nav class="topbar">
  <ul class="topbar-nav">
    <li class="top-item">
      <div class="nav-link" aria-label="Settings">
        <LogoIcon />
      </div>
    </li>

    <li class="top-item">
      <a href="./settings" class="nav-link" aria-label="Settings">
        <SettingsIcon />
      </a>
    </li>

  </ul>
</nav>
