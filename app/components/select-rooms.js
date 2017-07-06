import Ember from 'ember';

export default Ember.Component.extend({
    name: null,
    rooms: 1,
    mountPeopleTemplate(name, slug, index, type, quantity) {
        var html = '<label>' + name + '</label>';

        if (type == 'children') {
            html+= '<select name="' + slug + '-' + index + '-' + type + '" onchange=\'{{action "changeQuantityChildren" value="target.value"}}\'>';
        } else {
            html+= '<select name="' + slug + '-' + index + '-' + type + '">';
        }

        for (var i = 1; i <= quantity; i++) {
            html+= '<option value="' + i + '">' + i + '</option>';
        }

        return html;
    },
    actions: {
        changeQuantityRooms(value) {
            this.set('rooms', value);

            var containerPeople = this.$().find('.container-people');

            containerPeople.html('');

            for (var j = 0; j < this.get('rooms'); j++) {
                containerPeople.append(this.mountPeopleTemplate("Adultos | + 18", this.get('name'), j, 'adults', 9));
                containerPeople.append(this.mountPeopleTemplate("Crianças | até 17 anos", this.get('name'), j, 'children', 9));
                containerPeople.append('<hr />');
            }

            containerPeople.append('<div class="container-children"></div>');
        },
        changeQuantityChildren(value) {
            console.log("Children: " + value);
        }
    }
});
