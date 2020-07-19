import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

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

    @service store;

    async model(params) {
        const timeWindow = getTimeWindow(params.timeWindow);
        return {
            trending: await this.store.find('trending', timeWindow),
            isWeek: timeWindow === 'week',
            search: params.query && await this.store.find('search', params.query)
        };
    }
}
