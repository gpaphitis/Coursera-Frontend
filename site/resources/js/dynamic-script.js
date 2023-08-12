(function(global) {
    let $page={};
    let mainHtml='../../bootstrap/dynamic/maincontent.html';
    let menuItemsHTML = "menuitems.html";
    let menuItems = "../../resources/menu-data.json";
    let insertHtml=function(selector,html) {
        document.querySelector(selector).innerHTML=html;
    };

    // Shows a loading gif while waiting for the http response
    // I can find many loading icons online
    let showLoading=function(selector) {
        let html='<div class="text-center">';
        html+='<img src="../../resources/loading.gif></div>';
        insertHtml(selector,html);
    }

    // Substitutes a property defined in our menuitems.html with its correct values
    let insertProperty = function (string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        // g is for global search meaning it will replace all matches in the string
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    };

    document.addEventListener("DOMContentLoaded",(event) => {
        showLoading('#main-content');
        // Sends GET reques for the html that has the main content
        $ajaxUtils.sendGetRequest(
            mainHtml,
            (responseText) => {
                insertHtml('#main-content',responseText);
            },
            false
        );
    });
    // This changes the contents of the main-content instead of loading a whole new page
    function loadMenuItems() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(menuItems, buildAndShowItems, true);
    function buildAndShowItems(dataJson) {
        $ajaxUtils.sendGetRequest(
        menuItemsHTML,
        (itemsHtml) => {
            let fullItemsHtml = buildView(itemsHtml, dataJson);
            insertHtml("#main-content", fullItemsHtml);
        },
        false
        );
    }
    function buildView(itemsHtml, dataJson) {
        let finalHtml = '<h2 class="text-center"> Lunch Menu</h2>';
        finalHtml += '<section class="row lunch-options">';
        for (let itemNum in dataJson) {
        let html = itemsHtml;
        let item = dataJson[itemNum];
        for (let propName in item) {
            html = insertProperty(html, propName, item[propName]);
        }
        finalHtml += html;
        }
        finalHtml += "</section>";
        return finalHtml;
  }

    // Sets the menu button and dropdown item to active
    (function(){
        document.querySelector('#menu-action').classList.add('active');
        document.querySelector('.dropdown-item:nth-child(1)').classList.add('active');
    })();
}
$page.loadMenuItems=loadMenuItems;
global.$page=$page;
})(window);