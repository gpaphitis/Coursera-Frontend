// For the function it makes no difference
function a() 
{
    // Because after the return there is nothing so it places a semicolon and returns nothing
    return
    {
        name: 'Topg Paphitis'
    };
}
function b() {
    return {
        name: 'TopG Paphitis'
    };
}
console.log(a());
console.log(b());