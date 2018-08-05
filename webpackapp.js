//Vue Dependencies
import Vue from './node_modules/vue/dist/vue.esm.browser.js';

// //Vue Bootstrap dependencies
// // import Bootstrap from './node_modules/bootstrap/dist/js/bootstrap.min.js'
// import BootstrapVue from './node_modules/bootstrap-vue/dist/bootstrap-vue.min.js';

// //have vue actually use vue bootstrap
// Vue.use(BootstrapVue);

// //import front end services
// import services from './public/js/services.js';

// //import vue components to be used in vue application
import CsvFileInput from './public/vue/CsvFileInput.vue';

// components.use(Vue);
// components.use(services);


//the Vue app instance itself
var app = new Vue({
    el: '#app',
    components: {
        CsvFileInput
    },
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
