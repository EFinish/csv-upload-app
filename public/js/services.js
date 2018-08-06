//front end services for application

//file service: action 1 = upload
var FileService = (function(){
    var upload = function(file) {
        //upload file via post to /upload
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