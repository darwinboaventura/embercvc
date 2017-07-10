import Ember from 'ember';

export default Ember.Component.extend({
    name: null,
    quantityRooms: 1,
    rooms: '',
    people: {},
    init() {
        this._super(...arguments);
        this.set('rooms', [1]);
    },
    formatRooms() {
        var string = '';
        var rooms = this.get('people');

        for (var room in rooms) {
            if (rooms.hasOwnProperty(room)) {
                for (var person in rooms[room]) {
                    for (var i = 0; i < rooms[room][person].length; i++) {
                        string += rooms[room][person][i] + ",";
                    }
                }

                string += "+";
            }
        }

        return string.replace(',+', '+').replace(',+', '');
    },
    actions: {
        changeQuantityRooms(value) {
            this.set('quantityRooms', value);
            this.set('rooms', []);

            for (var i = 0; i < this.get('quantityRooms'); i++) {
                this.get('rooms').pushObject(i);
            }
        },
        changeQuantityChildren(value) {
            this.set("quantity" + value.name, value.value);
            this.set(value.name, []);

            for (var i = 0; i < this.get("quantity" + value.name); i++) {
                this.get(value.name).pushObject(i);
            }
        },
        addAdult(element) {
            var people = this.get('people');
            var value = element.target.value;
            var index = element.target.dataset.index;

            if (typeof people[index] == "undefined") {
                people[index] = {};
            }

            people[index]['ad'] = [];

            for (var i = 0; i < value; i++) {
                people[index]['ad'].pushObject(30);
            }

            this.get('onChangeRooms')('rooms', this.formatRooms());
        },
        addChild(element) {
            var people = this.get('people');
            var value = element.target.value;
            var index = element.target.dataset.index;
            var index2 = element.target.dataset.sindex;

            if (typeof people[index] == "undefined") {
                people[index] = {};
            }

            if (typeof people[index]['ch'] == "undefined") {
                people[index]['ch'] = [];
            }

            people[index]['ch'][index2] = value;

            this.get('onChangeRooms')('rooms', this.formatRooms());
        }
    }
});
