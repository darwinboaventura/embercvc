import Ember from 'ember';

export default Ember.Component.extend({
    getTodayDate() {
        var data = new Date();
        var today = '';

        if (data.getDate() < 10) {  
            today += 0;
            today += data.getDate() + "/";
        } else {
            today += data.getDate() + "/";
        }

        if (data.getMonth() < 10) {
            today += 0;
            today += data.getMonth() + "/";
        } else {
            today += data.getMonth() + "/";
        }

        today += data.getFullYear();

        return today;
    },

    model() {
        return {
            todayDate: this.get('getTodayDate')()
        };
    },

    actions: {
        sendForm() {
            this.get('getUrlAdress')(this.get('url'));
            this.get('submitForm')();
        }
    }
});
