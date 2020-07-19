import Model, { attr } from '@ember-data/model';

export default class SearchModel extends Model {
    @attr('array') results;
}
