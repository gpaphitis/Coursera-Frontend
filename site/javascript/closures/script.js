function makeMultiplier(multiplier) {
    // The function value that is written can find the multiplier value that was passed to the outer function
    // This is because of closures
    // Closures is when a function that is returned as a value preserves the variables in its outer lexical environment aswell
    return (
        function(x) {
            return multiplier*x;
        }
    );
}
var doubleAll=makeMultiplier(2);
// When this is called it can double the value because it finds the multiplier value from its preserved outer lexical environment
// that had the value 2 for the multiplier
console.log(doubleAll(10));