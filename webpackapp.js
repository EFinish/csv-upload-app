//Vue Dependencies
import Vue from './node_modules/vue/dist/vue.esm.browser.js';

//Vue Bootstrap dependencies
// import Bootstrap from './node_modules/bootstrap/dist/js/bootstrap.min.js'
import BootstrapVue from './node_modules/bootstrap-vue/dist/bootstrap-vue.min.js';

Vue.use(BootstrapVue);

import components from './public/js/index/components.js';

var app = new Vue({
    el: '#app',
    data: {
        file_loaded: false,
        people: []
    },
    methods: {
        setFileLoaded: function(value) {
            this.file_loaded = value;
        },
        setPeople: function(values) {
            this.people = values;
        }
    }
});