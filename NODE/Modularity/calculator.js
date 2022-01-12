// Section of code is a module..

function add(a , b){
    console.log("sum is", a+b);
}

function sub(a , b){
    console.log("diff is", a-b);
}

function product(a , b){
    console.log("product is", a*b);
}

function div(a , b){
    console.log("div is", a/b);
}


// add(1,3);

//With the help of "module.exports" functionality we could easily use the function which have been defined in this file into some another file as well.
// This should be in the key value pair
module.exports={
    addition: add,
    substract: sub,
    Multiply: product,
    division: div
}