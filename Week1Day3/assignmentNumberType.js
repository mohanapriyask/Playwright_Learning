function positiveNegativeZero(x) {
   let output = x
   if (x>0) {
    console.log("The number is positive");
   }else if(x<0){
    console.log("The number is negative");
   }else if(x===0){
    console.log("The number is zero");
   }
    return output

}

positiveNegativeZero(0)