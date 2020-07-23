import App from './App.svelte';
import Home from './routes/Home.svelte';

const app = new App({
	target: document.body,
});

window.app = app;

export default app;