// This is a string represantation of a json object
// All of it has to be on the same line
let jsonString= '{"firstName": "TopG","lastName": "Paphitis","age": 20}';

// Convert json string to object
let jsonObj=JSON.parse(jsonString);

// Convert json object to string
jsonString=JSON.stringify(jsonObj);

console.log(jsonObj);
console.log(jsonString);
// You can access json object properties like for a normal object
// Instead of concatenating string to include values you  can use BACKTICS( ` ) and enclose the variables in ${} 
console.log(`${jsonObj.firstName}  ${jsonObj.lastName}`)