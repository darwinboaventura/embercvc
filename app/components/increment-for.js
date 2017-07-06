import Ember from 'ember';

export default Ember.Component.extend({
    numOfTimes: Ember.computed('times', function() {
        const times = parseInt(this.get('times'));
        return new Array(times);
    })
});