// Write a recursive function that given a number returns sum of 
// integers from 1 to that number. 
// Example:
// rSigma(5) = 15 (1+2+3+4+5)
// rSigma(2.5) = 3 (1+2)
// rSigma(-1) = 0


function rSigma(num){
  if (num <= 0){
    return 0;
  }
  else if (num == 1){
    return 1;
  }
  else {
    return Math.trunc(num) + rSigma(Math.trunc(num)-1);
  }
}

console.log(rSigma(5)); // 15
console.log(rSigma(2.5)); // 3
console.log(rSigma(0)); // 0
console.log(rSigma(-1)); // 0
