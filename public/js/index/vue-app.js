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