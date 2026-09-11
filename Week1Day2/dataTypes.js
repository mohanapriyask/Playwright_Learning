/* Datatype specify the type of Data the variable holds 

1. Primitive Data Types
========================
--they are immutable - once you create variable and assign value to it then it cannot be changed

string
number
boolean
undefined
null
bigint


2. Non Primitive DataTypes
==============================
-- they are mutable and its collection of data
var arr=[1,2,3]
arr[2]=4 //[1,2,4,3]

arrays
objects
functions
*/

//number - in JS every single digit, decimal, float etc will be represented as number 
/* int, float, double - in other programming languages */
console.log("Learning Numbers")

var phoneNumber = 1234567890
var phoneNumber1 = "5678901234"
console.log("phoneNumber")//1234567890
console.log(typeof phoneNumber)//number

console.log("phoneNumber1")//5678901234
console.log(typeof phoneNumber1)//string

//string - in JS single char, group of chars 
/* representation - (single quote)'', ""(double quotes), ``(backticks) */
console.log("Learning Strings")

var email = "admin@testleaf.com"
console.log(email)//admin@testleaf.com
console.log(typeof email)//string

//boolean
console.log("Learning Boolean")

var isJavaScriptIsInteresting = true
console.log(isJavaScriptIsInteresting)//true
console.log(typeof isJavaScriptIsInteresting)//boolean


//null - explicitly assigning null value
console.log("Learning Null")

var landlineNumber = null
console.log(landlineNumber)//null
console.log(typeof landlineNumber)//object

//undefined
console.log("Learning undefined")

var bankAccountNumber
console.log(bankAccountNumber);//undefined
console.log(typeof bankAccountNumber);//undefined

//bigint
console.log("Learning bigint")
//-(2^53 -1) to (2^53 -1)) = 16 digits
var transactionId=1234354636457467467785858888
console.log(transactionId);
console.log(typeof transactionId);

var transactionId1=1234354636457467467785858888n
console.log(transactionId1);
console.log(typeof transactionId1);









