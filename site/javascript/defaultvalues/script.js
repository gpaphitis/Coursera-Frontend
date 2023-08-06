function orderWith(side) {
    // Substitute for this
    // if(side === udefined) {
    //     side='whatever'
    // }
    // The boolean expression returns the first argument that sets it to true
    // So if side is undefined or null or anything else that is evaluated to false then the default value is set
    // This is only done with the OR logical expression
    side=side || 'whatever';
    console.log('Chicken with '+side);
}
orderWith('noodles');
orderWith();