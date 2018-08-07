//Vue Dependencies
import Vue from './node_modules/vue/dist/vue.esm.browser.js';

//Vue Bootstrap dependencies
// import BootstrapJS from './node_modules/bootstrap/dist/js/bootstrap.min.js'
import BootstrapVue from './node_modules/bootstrap-vue/dist/bootstrap-vue.min.js';

//have vue actually use vue bootstrap
Vue.use(BootstrapVue);

//import front end services
// import services from './public/js/services.js';

//import vue components to be used in vue application
import UploadField from './public/vue/UploadField.vue';
import SearchField from './public/vue/SearchField.vue';
import LoadingBar from './public/vue/LoadingBar.vue';

var EventBus = new Vue();

//the Vue app instance itself
var app = new Vue({
    el: '#app',
    created: function() {
        EventBus.$on('set-file-loaded', this.setFileLoaded);
        EventBus.$on('set-uploading', this.setUploading);
        EventBus.$on('set-progress-percentage', this.setProgressPercentage);
        EventBus.$on('set-progress-step', this.setProgressStep);
        EventBus.$on('set-selected-person', this.setSelectedPerson);
        EventBus.$on('show-modal', this.showModal);
    },
    destroyed: function() {
        EventBus.$off('set-file-loaded', this.setFileLoaded);
        EventBus.$off('set-uploading', this.setUploading);
        EventBus.$off('set-progress-percentage', this.setProgressPercentage);
        EventBus.$off('set-progress-step', this.setProgressStep);
        EventBus.$off('set-selected-person', this.setSelectedPerson);
        EventBus.$off('show-modal', this.showModal);
    },
    components: {
        UploadField,
        SearchField,
        LoadingBar
    },
    data: {
        file_loaded: false,
        uploading: false,
        progress_percentage: 0,
        progress_step: null,
        selected_person: {}
    },
    computed: {
        uploadable: function() {
            return (!this.file_loaded && !this.uploading);
        },
        searchable: function(){
            return (this.file_loaded && !this.uploading);
        }
    },
    methods: {
        setFileLoaded: function(value) {
            this.file_loaded = value;
        },
        setUploading: function(value) {
            this.uploading = value;
        },
        setProgressPercentage: function(data) {
            this.progress_percentage = data;
        },
        setProgressStep: function(data) {
            this.progress_step = data;
        },
        setSelectedPerson: function(data) {
            this.selected_person = data;
            console.log(data);
        },
        showModal: function(name) {
            this.$root.$emit('bv::show::modal', name);
        }
    }
});

//css dependencies
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap-vue/dist/bootstrap-vue.min.css';

export {EventBus};

