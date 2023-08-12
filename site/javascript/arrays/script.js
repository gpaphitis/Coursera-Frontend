// Arrays are objects where the kays are the indexes and the values are what we assign to that index
var array=new Array();
// You can place any data type in a single array
array[0]="Giorgos";
array[1]=2;
array[2]=function (name) {
  console.log('Hello '+name);
};
array[3]={
  interest: 'programming'
};
console.log(array);
console.log(array[1]);
// Call stored function in array
array[2](array[0]);
console.log(array[3].interest);

// Faster array creation
var names=['TopG','Giorgos','Paphitis'];
// You can leave indeces empty and jump straight to a bigger one
names[10]='John';
console.log(names);
for(var i=0;i<names.length;i++)
{
  console.log(names[i]);
}

var cars=['Toyota','Mazda','Honda'];
var myObj={
  name: 'Giorgos',
  status: 'TopG',
  interest: 'programming'
};
// Special for loop for object properties
// Loops through the properties' names
for(var prop in myObj) {
    console.log(prop+': '+myObj[prop]);
}
// Since arrays are objects we can do this
for(var car in cars) {
  console.log('Cars:' +cars[car]);
}
console.log();
// If the array has other properties aswell then they will get looped through aswell
cars.engine='V10';
for(var car in cars) {
  console.log('Cars:' +cars[car]);
}
console.log();
// But this for loop will only go over the properties that are indeces
for(var i=0;i<cars.length;i++)
{
  console.log('Cars:' +cars[i]);
}