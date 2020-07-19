import { A, isArray } from '@ember/array'
import Transform from '@ember-data/serializer/transform';

export default Transform.extend({
    deserialize: function(value) {
        if (isArray(value)) {
            return A(value);
        } else {
            return A();
        }
    },
    serialize: function(value) {
        if (isArray(value)) {
            return A(value);
        } else {
            return A();
        }
    }
});
