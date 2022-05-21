import Home from './views/Home.vue';
import Log from './views/Log.vue';

export default [
	{ name: 'log', path: '/:logSlug', component: Log },
	{ name: 'home', path: '/', component: Home }
]
