// Document is a propertu of the window object that contains the pages source code
console.log(document.getElementById("title"));

// This will be true
console.log(document instanceof Document)

// To find all the methods for document search HTMLDocument

function sayHello() {
    // Here this is pointing to hte window object
    console.log(this);
    // Gets the input element and .value will give you the value of the input element(only works for input element)
    var name=document.getElementById("name").value;
    var message ="Hello "+name+"!";
    // Sets the text of the element. Anything given there will be considered text to be displayed
    // So you cant have html tags and expect them to be rendered as such
    document.getElementById('content').textContent=message;
    var h2Message='<h2> Hello '+name+'!</h2>';
    // innerHTML will insert what you give it as normal html so all tags and stuff will be rendered as html tags
    document.getElementById('head-content').innerHTML=h2Message;
    if(name === 'Paphitis') {
        // This gets the first element that matches using query seleectors the same way we do for css
        // To get all the elements matchung the selector use querySelectorAll()
        document.querySelector('h1#title').textContent='Welcome to the TopG 🔥';
    }


}