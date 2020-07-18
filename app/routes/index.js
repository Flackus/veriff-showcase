import Route from '@ember/routing/route';
import ENV from 'veriff-showcase/config/environment';

export default class IndexRoute extends Route {
    async model() {
        const popular = await fetch(`${ENV.TMBD_API_BASE_URL}/movie/popular?api_key=${ENV.TMDB_KEY}`);
        const top = await fetch(`${ENV.TMBD_API_BASE_URL}/movie/top_rated?api_key=${ENV.TMDB_KEY}`);
        const popularParsed = await popular.json();
        const topParsed = await top.json();
        return {
            popular: popularParsed.results,
            top: topParsed.results
        }
    }
}
