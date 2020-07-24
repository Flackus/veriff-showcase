import { helper as buildHelper } from '@ember/component/helper';

export function ratingGrade([rating]) {
    if (rating > 8) {
        return 'good';
    }
    if (rating > 5.5) {
        return 'average';
    }
    return 'bad';
}

export default buildHelper(ratingGrade);
