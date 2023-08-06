var message = "in global";
console.log("global: message= "+message);
// Each variables scope is inside the function it is defined
var a = function () {
    var message="inside a";
    console.log("a: message= "+message);
};
// Function b does not define it's own message so it takes the one in its outer scope which is global
var b = function () {
    console.log("b: message= "+message);
};
var c = function () {
    var message="inside c";
    console.log("c: message= "+message);
    // Since it is defined inside method c its outer scope is function c so it takes c's message
    function d () {
        console.log("d: message= "+message);
    }
    d();
};