import Model, { attr } from '@ember-data/model';

export default class MovieModel extends Model {
    @attr poster_path;
    @attr backdrop_path;
    @attr title;
    @attr release_date;
    @attr genres;
    @attr overview;
}
