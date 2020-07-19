import JSONSerializer from '@ember-data/serializer/json';

export default class MovieSerializer extends JSONSerializer {
    normalizeResponse(_store, _primaryModelClass, payload) {
        if (payload.releases) {
            const usCertification = payload.releases.countries.find((country) => country.iso_3166_1 === 'US');
            payload.content_rating = usCertification && usCertification.certification;
            if (payload.content_rating === 'R') {
                payload.do_verification = true;
            }
        }

        return super.normalizeResponse(...arguments);
    }
}
