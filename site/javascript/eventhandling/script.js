// The DOMConentLoaded event is triggered once the elements are loaded but before css and images are loaded
// So we use it to add our event listeners once the elements are loaded
document.addEventListener("DOMContentLoaded", (event) => {

    // Event is an object passed to the function by the event listener when triggered
    // This has useful information about the triggered event and some methods
    // Go to mdn docs for event to find available methods and information
    // Example of use at the end
    function sayHello(event) {
        console.log(event);
        // Because the listener is set on the button element this will now point to the button element
        this.textContent='Said it';
        var name=document.getElementById("name").value;
        var message ="Hello "+name+"!";
        document.getElementById('content').textContent=message;
        var h2Message='<h2> Hello '+name+'!</h2>';
        document.getElementById('head-content').innerHTML=h2Message;
        if(name === 'Paphitis') {
            document.querySelector('h1#title').textContent='Welcome to the TopG 🔥';
        }
    }
    // Unobstrusive event binding
    // This adds a click listener to our button and uses the function value sayHello
    document.querySelector('button').addEventListener('click',sayHello);
    
    // Different way to add event listeners using the on* handlers available in html tags
    document.querySelector("button").onclick=sayHello;

    // Event listener for mouse movement
    document.querySelector('body').addEventListener('mousemove', (event) => {
        // If shift key is pressed then pointers x and y coordinates are logged
        if(event.shiftKey) {
            console.log('X: '+event.clientX);
            console.log('Y: '+event.clientY);
        }
    })
});
