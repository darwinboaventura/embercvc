import DS from 'ember-data';

export default DS.Model.extend({
    description: DS.attr(),
    hits: DS.attr(),
    IATA: DS.attr(),
    latitude: DS.attr(),
    longitude: DS.attr(),
    masterCode: DS.attr(),
    type: DS.attr(),
    inc: DS.attr(),
    _id: DS.attr(),
    _score: DS.attr()
});
