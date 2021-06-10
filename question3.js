//Scopes in js are global,local and lexical
//A global scope is declared outside of a function and it can be accessed anywhere within your code.
let a = "hello";

function greet() {
    console.log(a);
}

greet(); // hello



//A local scope is declared inside a function and it can only be accessed within that function.
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // error
16

// A lexical scope is found in js closures,it means that a variable defined outside a 
//function can be accessible inside another function defined after the 
//variable declaration.But the opposite is not true;


var x = 2;
var add = function() {
    var y = 1;
    return x + y;
};