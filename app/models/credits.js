import Model, { attr } from '@ember-data/model';

export default class CreditsModel extends Model {
    @attr('array') cast;
}
