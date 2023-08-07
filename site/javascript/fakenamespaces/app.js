// When inspected through the index.html both will greet Paphitis
// This is because each script defines a global name variable so the last defined one in the hmtml overrides the first one
sayHello();
sayHi();
console.log();
// The objects act as namespaces that say which 'class'' greeting to show
topgGreeter.sayHello();
paphitisGreeter.sayHi();