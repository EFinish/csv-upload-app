<template>
    <form enctype="multipart/form-data" method="pos" action="/import" class="col-sm-12">
        <label for="uploadField">CSV file to upload</label>
        <input id="uploadField" type="file" class="form-control" v-on:change="onChange">
    </form>
</template>

<script>
import {FileService} from '../js/services';
// var axios = require('axios');
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
            //prepare data to send to service
            let formData = new FormData();
            formData.append('file', this.file);

            //send to service
            FileService.upload(this.file)
            .then(function(response){
                console.log("done!");
                // console.log(response);
            })
            .catch(function(){
                console.log('FAILURE!!');
            });

            //after upload success
            // app.setFileLoaded(true);
        }
    }
}
</script>