/* global Veriff */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import ENV from 'veriff-showcase/config/environment';

const STORAGE_NAME = 'veriff-showcase/adult-movie-verification-done';

export default class WatchLinkComponent extends Component {
    @action async doVerification(verificationNeeded, event) {
        if (!verificationNeeded || localStorage.getItem(STORAGE_NAME) === 'true') {
            return;
        }

        event.preventDefault();

        try {
            await new Promise((resolve, reject) => {
                const veriff = Veriff({
                    host: 'https://stationapi.veriff.com',
                    apiKey: ENV.VERIFF_KEY,
                    parentId: 'veriff-root',
                    onSession: (err, response) => {
                        if (err) {
                            return reject(err);
                        }
                        window.veriffSDK.createVeriffFrame({
                            url: response.verification.url,
                            onEvent: (msg) => {
                                switch(msg) {
                                case 'CANCELED':
                                    reject('Verificaton has been cancelled');
                                    break;
                                case 'FINISHED':
                                    resolve();
                                    break;
                                }
                            },
                        });
                    }
                });
                veriff.mount({formLabel: { vendorData: 'Email' }});
                this.open();
            });
            localStorage.setItem(STORAGE_NAME, 'true');
            window.location.href = event.srcElement.href;
        } catch (e) {
            console.error(e);
            this.close();
        }
    }

    open() {
        this._el || (this._el = document.querySelector('.verification'));
        this._el.classList.remove('verification_display_none');
    }

    close() {
        this._el.classList.add('verification_display_none');
    }
}
