// Functions ARE objects
function multiply(x,y) {
    return x*y;
}
console.log(multiply(5,3));
multiply.version='v1.0.0';
// Prints the function-object. Does NOT call it
console.log(multiply);
// All objects inherit a toString() method
console.log(multiply.toString());

// Functon factory
function makeMultiplier(multiplier) {
    // This creates a function that sets the multiplier to the givev parameter, accepts its own parameter and multiplies them
    var myFunc= function(x) {
        return multiplier*x;
    };
    return myFunc;
}
// This returns a function that multiplies by three a given parameter
var multiplyBy3=makeMultiplier(3);
console.log(multiplyBy3(10));

// Passing functions as arguments
function doOperationOn(x,operation) {
    return operation(x);
}

var result=doOperationOn(5,multiplyBy3);
console.log(result);
