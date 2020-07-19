import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'veriff-showcase/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
    buildURL(...args) {
        const [handle, param] = args;
        const url = [ENV.TMBD_API_BASE_URL];

        switch (handle) {
        case 'search':
            url.push(handle);
            url.push('movie');
            break;

        case 'trending':
            url.push(handle);
            url.push('movie');
            url.push(param);
            break;

        case 'credits':
            url.push('movie');
            url.push(param);
            url.push(handle);
            break;

        case 'movie':
            url.push(handle);
            url.push(param);
            break;
        }

        const params = [
            `api_key=${ENV.TMDB_KEY}`
        ];

        if (handle === 'search') {
            params.push(`query=${param}`);
        }

        if (handle === 'movie') {
            // get content ratings with the main info
            params.push('append_to_response=releases');
        }

        return url.join('/') + '?' + params.join('&');
    }
}
