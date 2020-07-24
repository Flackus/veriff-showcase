import { helper as buildHelper } from '@ember/component/helper';

export function ratingValue([rating]) {
    if (parseInt(rating, 10) === rating) {
        return rating.toPrecision(2);
    }
    return rating;
}

export default buildHelper(ratingValue);
