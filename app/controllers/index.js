import Controller from '@ember/controller';

export default class IndexController extends Controller {
    queryParams = ['timeWindow'];

    timeWindow = null;
}