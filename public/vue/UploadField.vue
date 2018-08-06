<template>
    <form enctype="multipart/form-data" method="pos" action="/import" class="col-sm-12">
        <label for="uploadField">CSV file to upload</label>
        <input id="uploadField" type="file" class="form-control" v-on:change="onChange">
    </form>
</template>

<script>
// import FileService from '../js/services.js';
var axios = require('axios');
export default {
    data: function() {
        return {
            file: null
        };
    },
    methods: {
        onChange: function(e) {
            var files = e.target.files;

            if (files.length !== 1) {
                return;
            } else {
                this.file = files[0];
                this.uploadFile();
            }
        },
        uploadFile: function() {
            console.log(this.file);
            let formData = new FormData();
            // formData.append('file', this.file);
            // axios.post('/import', )
            axios.post(
                '/import',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            .then(function(response){
                console.log("done!");
                console.log(response);
            });  
            // console.log(FileService);
            //upload file via post

            //after upload success
            // app.setFileLoaded(true);
        }
    }
}
</script>