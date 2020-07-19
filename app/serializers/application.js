import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
    normalizeResponse(_store, _primaryModelClass, payload, id) {
        if (!payload.id) {
            payload.id = id;
        }

        return super.normalizeResponse(...arguments);
    }
}
