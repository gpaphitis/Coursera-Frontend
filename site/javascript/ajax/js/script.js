document.addEventListener('DOMContentLoaded', (event) =>{
    document.querySelector('button').addEventListener('click',(event) => {
        // Semds GET request using the ajaxUtils object we exposed
        // The url is the one live server uses
        $ajaxUtils.sendGetRequest('data/names.txt', (request) => {
            // request.responseText holds the response from the server
            let name=request.responseText;
            // This must be placed here so it will be porcessed when the request is done since it is used as our responseHandler method
            document.querySelector('#content').innerHTML='<h2> Welcome to the '+name+' 🔥';
        });

    });
})