import App from './App.svelte';

const app = new App({
	target: document.body,
});

declare const window: any;
window.app = app;

export default app;