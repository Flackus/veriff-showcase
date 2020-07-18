import Route from '@ember/routing/route';
import ENV from 'veriff-showcase/config/environment';

function getTimeWindow(param) {
    return param === 'week' ? 'week' : 'day';
}

export default class IndexRoute extends Route {
    queryParams = {
        query: {
            refreshModel: true
        },
        timeWindow: {
            refreshModel: true
        }
    };

    async model(params) {
        const timeWindow = getTimeWindow(params.timeWindow);
        const trending = await fetch(`${ENV.TMBD_API_BASE_URL}/trending/movie/${timeWindow}?api_key=${ENV.TMDB_KEY}`);
        const trendingParsed = await trending.json();

        let search = null;
        let searchParsed = null;
        if (params.query) {
            search = await fetch(`${ENV.TMBD_API_BASE_URL}/search/movie/?query=${params.query}&api_key=${ENV.TMDB_KEY}`);
            searchParsed = await search.json();
        }

        return {
            trending: trendingParsed.results,
            isWeek: timeWindow === 'week',
            searchResults: searchParsed && searchParsed.results,
        };
    }
}
