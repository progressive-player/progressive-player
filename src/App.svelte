<script>
import Router from 'svelte-spa-router';
import Home from './routes/Home.svelte';
import Feeds from './routes/Home.svelte';
import Library from './routes/Home.svelte';
import Downloads from './routes/Home.svelte';
import Settings from './routes/Home.svelte';
import MainNav from './components/MainNav.svelte';
import TopBar from './components/TopBar.svelte';

const routes = {
    '/': Home,
    '/feeds': Feeds,
    '/library': Library,
    '/downloads': Downloads,
    '/settings': Settings
};
</script>

<style>

</style>

<MainNav />
<TopBar />
<Router {routes} />


