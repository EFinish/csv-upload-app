<template>
    <form enctype="multipart/form-data" method="pos" action="/import" class="col-sm-12">
        <label for="uploadField">CSV file to upload</label>
        <input id="uploadField" type="file" class="form-control" v-on:change="onChange">
    </form>
</template>

<script>
import {FileService} from '../js/services';

import {EventBus} from '../../webpackapp.js';
// var axios = require('axios');
export default {
    props: [
        'uploading'
    ],
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
            //set uploading and progress
            EventBus.$emit('set-uploading', true);
            EventBus.$emit('set-progress-step', 'Uploading file');

            //prepare data to send to service
            let formData = new FormData();
            formData.append('file', this.file);

            var onUploadProgressCallback = function(uploadTotal) {
                EventBus.$emit('set-progress-percentage', uploadTotal);
                if (uploadTotal === 100) {
                    EventBus.$emit('set-progress-step', 'Parsing file');
                }
            }

            //send to service
            FileService.upload(this.file, onUploadProgressCallback)
            .then(function(response){
                EventBus.$emit('set-uploading', false);
                EventBus.$emit('set-file-loaded', true);
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        }
    }
}
</script>