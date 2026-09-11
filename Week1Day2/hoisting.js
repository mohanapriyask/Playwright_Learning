//hoisting - default behaviour of JS
//memory creation and execution phases are the two phases with respect to hoisting
console.log("Learning Hoisting using Var Keyword")
var a=10
console.log(a);

console.log(a);//undefined
console.log(typeof a);

var a=20

/* internally - in hoisting only the declaration part will be hoisted to the top before console and assignment will be done later like below
var a
console.log(a);
var a=10
*/

/* Let Keyword - Reference error - cannot be accessed before declaration*/

console.log("Learning Hoisting using Let Keyword")
let b=30;
console.log(b);


console.log(c);
let c=30;

/* const Keyword - Reference error - cannot be accessed before declaration and for const declaration and assignment should happen in the same line*/

console.log("Learning Hoisting using const Keyword")
let d=30;
console.log(d);


console.log(e);
let e=30;

//TDZ- Temporal Dead Zone - time period between the variable declaration and value assignment to a particular variable is called as TDZ