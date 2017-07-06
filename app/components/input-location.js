import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    name: '',
    value: '',
    required: false,
    productType: '',
    cities: '',
    init() {
        this._super(...arguments);
        this.set('cities', []);
    },
    actions: {
        searchCities() {
            this.get('store').query('location', {q: encodeURI(this.get('value')), productType: this.get('productType')})
            .then(function(cities) {
                this.set('cities', cities);
            });
        }
    }
});
