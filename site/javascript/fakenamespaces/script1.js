var name='Paphitis';
function sayHi() {
    console.log('Hi '+name);
}

// By maikng an object and giving it the name and greeting now we can specify which name and greeting we want
var paphitisGreeter={
    name: 'Paphitis',
    sayHi: function() {
        console.log('Hi '+this.name);
    }
};