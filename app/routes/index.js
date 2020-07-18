import Route from '@ember/routing/route';
import ENV from 'veriff-showcase/config/environment';

const API_BASE_URL = 'https://api.themoviedb.org/3'

export default class IndexRoute extends Route {
    async model() {
        const popular = await fetch(`${API_BASE_URL}/movie/popular?api_key=${ENV.TMDB_KEY}`);
        const top = await fetch(`${API_BASE_URL}/movie/top_rated?api_key=${ENV.TMDB_KEY}`);
        const popularParsed = await popular.json();
        const topParsed = await top.json();
        return {
            popular: popularParsed.results,
            top: topParsed.results
        }
    }
}
