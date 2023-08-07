var name='TopG';
function sayHello() {
    console.log('Hello '+name);
}

// By maikng an object and giving it the name and greeting now we can specify which name and greeting we want
var topgGreeter={
    name: 'TopG',
    sayHello: function() {
        console.log('Hello '+this.name);
    }
};