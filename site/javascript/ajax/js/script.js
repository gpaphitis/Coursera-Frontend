document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("#btn-txt").addEventListener("click", (event) => {
    // Semds GET request using the ajaxUtils object we exposed
    // The url is the one live server uses
    $ajaxUtils.sendGetRequest(
      "data/names.txt",
      (responseText) => {
        // responseText holds the response from the server
        let name = responseText;
        // This must be placed here so it will be porcessed when the request is done since it is used as our responseHandler method
        document.querySelector("#content-txt").innerHTML =
          `<h2> Welcome to the ${name} 🔥</h2>`;
      },
      false
    );
  });
  document.querySelector("#btn-json").addEventListener("click", (event) => {
    $ajaxUtils.sendGetRequest(
        "data/names.json",
        (responseJson) => {
            document.querySelector("#content-json").innerHTML =
                `<h2> Welcome to the ${responseJson.firstName} ${responseJson.lastName} 🔥</h2>`;
        },
        true
    );
    });
});
