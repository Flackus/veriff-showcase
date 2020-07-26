'use strict';

module.exports = function(environment) {
    const ENV = {
        modulePrefix: 'veriff-showcase',
        environment,
        rootURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {},
            EXTEND_PROTOTYPES: {
                Date: false
            }
        },
        APP: {}
    };

    ENV.TMDB_KEY = process.env.TMDB_KEY;
    if (!ENV.TMDB_KEY) {
        throw new Error('TMDB auth key is not provided');
    }

    ENV.TMBD_API_BASE_URL = 'https://api.themoviedb.org/3'

    ENV.VERIFF_KEY = process.env.VERIFF_KEY;
    if (!ENV.VERIFF_KEY) {
        throw new Error('Veriff key is not provided');
    }

    if (environment === 'test') {
        ENV.locationType = 'none';

        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
        ENV.APP.autoboot = false;
    }

    return ENV;
};
