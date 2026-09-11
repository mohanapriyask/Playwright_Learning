//var is a keyword which is used to declare a variable
console.log("Learning Var")
//declaration+assignment = Initialization
var courseName = "Playwright" //declaration
var courseName = "Selenium" //redeclaration /* Var keyword allows redeclaration */

console.log(courseName)
courseName = "python" //reassignment /* Var keyword allows reassignment */
console.log(courseName)
console.log(typeof courseName);



//declaration+assignment = Initialization
var courseName1 = "Playwright" //declaration
var courseName1 = 1234 //redeclaration /* Var keyword allows redeclaration */

console.log(courseName1)
console.log(typeof courseName1);
courseName1 = null //reassignment /* Var keyword allows reassignment */
console.log(courseName1)
console.log(typeof courseName1);

/* Var keyword allows redeclaration so we will not use var anymore from 2015 as it causes confusion and duplication */

//let - redeclaration is not allowed but reassignment is allowed
console.log("Learning Let")
let salary=50000
let salary1=20000
console.log(salary)
console.log(salary1)
salary=40000
salary1=30000
console.log(salary)
console.log(salary1)
salary="15000"
console.log(salary)
console.log(typeof salary);


//const - redeclaration is not allowed and reassignment is also not allowed and it will throw error while executing in case of reassignment
console.log("Learning const")
const pi=3.14
console.log(pi)
console.log(typeof pi);
pi=4.16
console.log(pi)

