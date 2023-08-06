// Objects are key-value pairs
// Preferred way of defining objects
var x = {
    // Key: firstname Value: "TopG"
    firstname: "TopG",
    lastname: "Paphitis",
    // Value here is a list
    interests: [
        "programming",
        "gaming"
    ],
    age: 20,
    // Nested object
    // Value is another object
    socials: {
        linkedin: "giorgospaphitis",
        facebook: "Giorgos Paphitis"
    }
};

// New properties can be defined like this
console.log(x);
x.grade=100;
console.log(x);

// Creates a new null object
var y=new Object();

// Will through error because ceo is undefined
// It doesn't auto create all the necessary keys
try {
    x.ceo.name="Whatever";
} catch (error) {
    console.log(error);
}
x.ceo=new Object();
x.ceo.name='Whatever';
console.log(x);
``
// Two ways to get or set value of a specific key
console.log(x.age);
console.log(x['lastname']);
// The brackets allow you to include spaces in the key name
x["Is Theos"]=true;
// In the brackets you can also inlcude a variable that holds the key name
var key='Is Theos';
console.log('Is Theos: '+x[key]);