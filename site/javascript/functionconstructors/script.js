// Function Constructor
// Capital letter for function name is a convetion that shows that is is a function constructor
// This function cannot return anything and acts similarily to a Java class
function Circle(radius) {
  this.radius= radius;
  // Each function is defined as a property of the class
  this.getRadius=function() {
    return this.radius;
  };
  // This will create this function everytime a new object is made
  this.getArea= function(){
      return Math.PI*Math.pow(this.radius,2);
  };
}
// To create a function for a class only once and attach it to all objects
Circle.prototype.getPerimeter = function(){
    return 2*Math.PI*this.radius;
};
var myCircle=new Circle(10);
console.log(myCircle);
console.log(myCircle.getRadius());
console.log(myCircle.getArea());
console.log(myCircle.getPerimeter());
