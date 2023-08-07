// Example of IIFE
// When the script is loaded this function is immediately run because it is wrapped in () making it like a parameter name
// and the invoking it by placing (); at the end
// This will create its own execution context for the script 
// where greeting now is not a global variable so it won't clash with the other one
// Tbhe window parameter is used to expose the greeter to the outside so that it can be used elsewhere
// and since the greeters execution context is here, it will start searching for anything it needs first here
(function(window) {
    var greeting='Hello ';
    var greetTopg={
        name: 'TopG',
        sayHello: function() {
            console.log(greeting+this.name);
        }
    };
    window.greetTopg=greetTopg;
} )(window);