import Ember from 'ember';

export default Ember.Controller.extend({
    init() {
        this._super(...arguments);
        this.set('properties', {});
    },
    actions: {
        getValueLocation(name, value) {
            this.set('properties.' + name, value);
        },
        getUrlAddress(url) {
            this.set('properties.url', url);
        },
        dateChanged(name, date) {
            this.set('properties.' + name, date);
        },
        getValuesRoom(name, rooms) {
            this.set('properties.' + name, rooms);
        },
        submitForm() {
            console.log(this.get('properties'));
        }
    }
});
