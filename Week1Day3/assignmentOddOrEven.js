function isOddOrEven(x) {
   let output = x
   if ((x%=2)===0) {
    console.log("The number is even");
   }else{
    console.log("The number is odd");
   }
    return output

}

isOddOrEven(50)