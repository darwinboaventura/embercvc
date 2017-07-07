import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    label: '',
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
            var self = this;

            this.get('store').query('location', {q: encodeURI(this.get('value')), productType: this.get('productType')}).then(function(cities) {
                self.set('cities', []);

                cities.toArray().map(function(city) {
                    self.get('cities').pushObject(city.toJSON());
                });
            });
        },
        clickedCity(description) {
            this.set('value', description);
            this.set('cities', []);
        }
    }
});
