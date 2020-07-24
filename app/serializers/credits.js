import JSONSerializer from '@ember-data/serializer/json';

export default class MovieSerializer extends JSONSerializer {
    normalizeResponse(_store, _primaryModelClass, payload) {
        if (payload.cast) {
            payload.cast = payload.cast.slice(0, 20);
        }

        return super.normalizeResponse(...arguments);
    }
}
