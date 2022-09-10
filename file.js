// function to find the sum of digits
function sumOfDigits(value) {
    sum = 0;
  
    while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
  
    }
    //console.log(sum);
    return sum;
}
    
// function to find odd/even
function oddOrEven(number) {
    sum = sumOfDigits(number);
    //console.log(sum)
    if (sum % 2 == 0) {
      return "Even";
    } 
    else {
      return "Odd";
    }
    
}
  
console.log(oddOrEven(4433));