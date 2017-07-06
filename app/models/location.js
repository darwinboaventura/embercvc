import DS from 'ember-data';

export default DS.Model.extend({
    q: DS.attr(),
    productType: DS.attr()
});
