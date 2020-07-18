import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking'
import { debounce } from '@ember/runloop';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SearchComponent extends Component {
    @service router;
    @tracked query = this.router.currentRoute.queryParams.query;

    setValue() {
        this.router.transitionTo('index', { queryParams: { query: this.query }});
    }

    @action onQueryChange() {
        debounce(this, this.setValue, 500);
    }
}
