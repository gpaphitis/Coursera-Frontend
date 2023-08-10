(function (global) {
  // Used as a namespace to attach anything we want to expose outside
  var ajaxUtils = {};

  // Return an Http request object
  function getRequestObject() {
    // Latest version used from browsers to send HttpRequests
    // If it is supported then it will be a property of the window
    if (global.XMLHttpRequest) {
      return new XMLHttpRequest();
    }
    // For very old browsers
    else if (windows.ActiveXObject) {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } else {
      global.alert("Ajax is not supportd for this browser");
      return null;
    }
  }
  // Exposing a send get request function
  // responseHandler is a method a user gives to handle the response when it arrives
  ajaxUtils.sendGetRequest = function (
    requestUrl,
    responseHandler,
    isJsonResponse
  ) {
    var request = getRequestObject();
    // The communication between the browser and the server goes through different stages
    // When its ready and it sends a response this function is called
    request.onreadystatechange = () => {
      handleResponse(request, responseHandler, isJsonResponse);
    };
    // Opens a request
    // True means it will be an asychronous request. Setting it to flase will make it a synchronous request
    request.open("GET", requestUrl, true);
    // Sends the request
    // Null is where the request body is placed
    request.send(null);
  };

  function handleResponse(request, responseHandler, isJsonResponse) {
    // State 4 is the final stage of the communication meaning we got a response
    // If the state is not 4 or the response status is not 200 then we simplu return nothing
    if (!(request.readyState == 4) || !(request.status == 200)) {
        responseHandler(null);
      return;
    }
    // If no value was defined then we default to true
    if(isJsonResponse == undefined)
        isJsonResponse=true;

    // If it is true then the response will be json string so we parse it to an object before we return it
    if(isJsonResponse) {
        responseHandler(JSON.parse(request.responseText));
        return;
    }
    responseHandler(request.responseText);
  }

  global.$ajaxUtils = ajaxUtils;
})(window);
