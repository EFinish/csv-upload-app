//front end services for application

//file service: action 1 = upload
var FileService = (function(){
    var upload = function(formData) {
        console.log("reached service");
        //upload file via post to /upload
        return axios.post(
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
    };

    return {
        upload: upload
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