//front end services for application

var axios = require('axios');

//file service: action 1 = upload
var FileService = (function(){
    var upload = function(formData, onUploadProgressCallback) {
        //upload file via post to /upload
        return axios.post(
            '/import',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: function(progress) {
                    var progressTotal =  parseInt( Math.round( ( progress.loaded * 100 ) / progress.total ) );
                    onUploadProgressCallback(progressTotal);
                }
            }
        );  
    };
    
    return {
        upload: upload,
        status: status
    };
})();

//people service: action 1 = search
var PeopleService = (function(){
    var search = function(query) {
        //post query using {query: query}
    };

    return {
        search: search
    };
})();

export {FileService, PeopleService};