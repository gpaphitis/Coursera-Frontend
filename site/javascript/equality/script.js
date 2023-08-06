var x=4,y=4;
// Normal equality
console.log(x==y);
// This is type coercion
// It automatically converts one of the types to be the same as the other one
x='4';
console.log(x==y);
// With 3 equal signs we use strict equality
// This prevents type coercion
console.log(x===y);