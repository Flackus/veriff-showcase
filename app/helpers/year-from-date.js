import { helper as buildHelper } from '@ember/component/helper';

export function yearFromDate([dateStr]) {
    return new Date(dateStr).getFullYear();
}

export default buildHelper(yearFromDate);
