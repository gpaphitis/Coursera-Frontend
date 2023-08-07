// Object literals and "this"
// This points to the global object but when a new object is created using the new keyword it points to that object
// This will refer to the object because it is created as new Object()
var literalCircle = {
  radius: 10,
  getArea: function () {
    // This is used to save the reference to this in order to use it when this might not work properly like below
    var self = this;
    console.log('Inside getArea: '+this);

    var increaseRadius = function () { 
      self.radius = 20;
      // When you have an inner function, this points to the global object
      console.log('Inside increaseRadius: '+this);
    };
    increaseRadius();
    console.log(this.radius);
    return Math.PI * Math.pow(this.radius, 2);
  }
  };
  console.log(literalCircle.getArea());