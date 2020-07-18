import Route from '@ember/routing/route';
import ENV from 'veriff-showcase/config/environment';

export default class MovieRoute extends Route {
    async model(params) {
        const movie = await fetch(`${ENV.TMBD_API_BASE_URL}/movie/${params.movie_id}?api_key=${ENV.TMDB_KEY}`);
        const movieParsed = await movie.json();
        const credits = await fetch(`${ENV.TMBD_API_BASE_URL}/movie/${params.movie_id}/credits?api_key=${ENV.TMDB_KEY}`);
        const creditsParsed = await credits.json();
        return {
            movie: movieParsed,
            cast: creditsParsed.cast.slice(0, 20)
        };
    }
}
