/* Operators - are special symbols that is used to perform operations on values(operands)

1. Arithmetic Operators - used for mathematical calculations

+,-,/,*,%

/ -> Quotient
% -> Remainder

2. Assignment Operators - used to assign values to the variable

+=
-=
*=
/=
%=

3. Comparison Operators - used to compare values (returns true or false)

> ->Greater
< ->Lesser
>= -> Greater than
<= -> Lesser than
=== -> strict equality //compares both value and data type
== -> loose equality - checks only the value

4. Logical Operators
&& (AND)
|| (OR)
! (NOT)

5. Unary Operators - works on single operand(single variable)

Pre-increment -> increments first and then assign
++a

Post-increment -> use first and then increment
a++

Pre-decrement -> decrements first and then assign
--a

Post-decrement -> use first and then decrement
a--


*/

let x=20, y=20
//Arithmetic operators
console.log("*********Learning Arithmetic Operators*********");
console.log(x+y);
console.log(x-y);
console.log(x/y); //returns quotient
console.log(x*y);
console.log(x%y); //returns remainder

//Assignment Operators
console.log("*********Learning Assignment Operators*********");
console.log(x+=5);
console.log(x-=5);
console.log(x*=2);
console.log(x/=4);
console.log(x%=3);

//Comparision Operators
console.log("*********Learning Comparision Operators*********");
console.log(x>y);
console.log(x<y);

//strict equality - checks both datatype and value
console.log("*********Learning Strict Equality Operators*********");
console.log(1==='1');
console.log('1'==='1');
console.log(1===1);

//loose equality - checks only thes value
//coeriction -> type conversion takes place 
console.log("*********Learning Strict Equality Operators*********");
console.log(1=='1');
console.log('1'=='1');
console.log(1==1);
console.log(true==1);
console.log(false==1);
console.log(null==undefined);

//logical operators 
//and (true && true), (true||false), and not(!true)
console.log("*********Learning Logical Operators*********");
let a=2, b=6
console.log(a>b && b>a);
console.log(a<b && b>a);
console.log(a>b || b>a);
console.log(!(a>b));

//Unary operators 

console.log("*********Learning Unary Operators*********");
let z=10
//pre-increment
console.log(++z);
console.log(z);
//post-increment
console.log(z++);
console.log(z);
//pre-decrement
console.log(--z);
console.log(z);
//post-decrement
console.log(z--);
console.log(z);


