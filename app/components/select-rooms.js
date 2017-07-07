import Ember from 'ember';

export default Ember.Component.extend({
    name: null,
    quantityRooms: 1,
    rooms: '',
    init() {
        this._super(...arguments);
        this.set('rooms', [1]);
    },
    actions: {
        changeQuantityRooms(value) {
            this.set('quantityRooms', value);
            this.set('rooms', []);

            for (var i = 0; i < this.get('quantityRooms'); i++) {
                this.get('rooms').pushObject(i);
            };
        },
        changeQuantityChildren(value) {
            this.set("quantity" + value.name, value.value);
            this.set(value.name, []);

            for (var i = 0; i < this.get("quantity" + value.name); i++) {
                this.get(value.name).pushObject(i);
            }
        }
    }
});
