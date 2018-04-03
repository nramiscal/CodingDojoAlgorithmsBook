// Recursive Factorial

// Given num , return the product of ints from 1 up to num .
// If less than zero, treat as zero. If not integer, truncate.
// Experts tell us 0! is 1 
// rFact(3) = 6 (1*2*3)
// rFact(6.5) = 720 (1*2*3*4*5*6)

function rFact(num){
  if (num <= 0){
    return 1;
  }
  else {
    return Math.trunc(num)*rFact(Math.trunc(num)-1);
  }
}

console.log(rFact(3));
console.log(rFact(6.5));
