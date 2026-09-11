/* scoping - visibility or accessibilty of the variable in the code

1. Global scope
2. Function scope
3. Block scope
*/

//global variable
var genderType = "female"
console.log("global variable is ", genderType);

function employee() {
    if (genderType == "female") {
    //Block scoped variable
    let name = "Mohanapriya"
    const age = 37
    var occupation = "QA" 
    //when we create var variable inside the block then it fails to act as block variable
    //when we create var variable inside the block and inside the function block then it fails to act as block variable but outside the function/block
    console.log("the name inside the if block", name);
    console.log("the age inside the if block", age);
    console.log("the age inside the if block", occupation);

}

//console.log("the name outside the if block", name); // referenceerror:name is not defined
//console.log("the age outside the if block", age); // referenceerror:name is not defined
console.log("the age outside the if block and inside function block", occupation);
    
}
console.log("the age outside the function and if block", occupation);//Reference error - occupation is not defined
employee()

