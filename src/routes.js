import Home from './views/Home.vue';
import gamesLog from './views/gamesLog.vue';
import moviesLog from './views/moviesLog.vue';

export default [
	{ name: 'gamesLog', path: '/:gamesLogSlug', component: gamesLog },
	{ name: 'moviesLog', path: '/:moviesLogSlug', component: moviesLog },
	{ name: 'home', path: '/', component: Home }
]
