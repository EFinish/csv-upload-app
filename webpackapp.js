//Vue Dependencies
import Vue from './node_modules/vue/dist/vue.esm.browser.js';

//Vue Bootstrap dependencies
// import BootstrapJS from './node_modules/bootstrap/dist/js/bootstrap.min.js'
import BootstrapVue from './node_modules/bootstrap-vue/dist/bootstrap-vue.min.js';

//have vue actually use vue bootstrap
Vue.use(BootstrapVue);

//import front end services
import services from './public/js/services.js';

//import vue components to be used in vue application
import UploadField from './public/vue/UploadField.vue';
import SearchField from './public/vue/SearchField.vue';

//the Vue app instance itself
var app = new Vue({
    el: '#app',
    components: {
        UploadField,
        SearchField
    },
    data: {
        file_loaded: false
    },
    methods: {
        setFileLoaded: function(value) {
            this.file_loaded = value;
        }
    }
});

//css dependencies
import './node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

