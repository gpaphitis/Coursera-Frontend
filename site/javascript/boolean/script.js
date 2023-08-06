// All these are considered false
if(false || null || undefined || "" || 0 || NaN){}
else{
    console.log('All false');
}

// All these are considered true
// Any non zero number is considered true
if(true && 1 && -13 && 'false' && 15)
    console.log('All true');