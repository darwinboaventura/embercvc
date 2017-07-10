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
        changedCheckbox(event) {
            var value = event.target.checked;
            var name = event.target.name;

            this.set('properties.' + name, value);
        },
        changedField(event) {
            this.set('properties.' + event.target.name, event.target.value);
        },
        clearFields() {
            this.set('properties', {});
            this.set('leaveDate', '');
            this.set('returnDate', '');
        },
        submitForm() {
            var properties = this.get('properties');
            var url = properties.url;
            var params = '';

            for (var field in properties) {
                if (field !== 'url') {
                    params += field + "=" + encodeURI(properties[field]) + "&";
                } 
            }

            console.log(url + "?" + params);
        }
    }
});
