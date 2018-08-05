<template>
    <form enctype="multipart/form-data" class="col-sm-12">
        <label for="uploadField">CSV file to upload</label>
        <input id="uploadField" type="file" class="form-control" v-on:change="onChange">
    </form>
</template>

<script>
export default {
    methods: {
        onChange: function(e) {
            var file = e.target.files;

            if (file.length !== 1) {
                return;
            } else {
                this.uploadFile(file);
            }
        },
        uploadFile: function(file) {
            console.log(file);
            //upload file via post

            //after upload success
            app.setFileLoaded(true);
        }
    }
}
</script>