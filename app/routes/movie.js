import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MovieRoute extends Route {
    @service store;

    async model(params) {
        return {
            movie: await this.store.find('movie', params.movie_id),
            credits: await this.store.find('credits', params.movie_id),
        };
    }
}
