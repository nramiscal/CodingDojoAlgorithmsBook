// recursive Fibonacci

function rFib(num){
  if (num <= 2){    // base case
    return 1;
  }
  else{
    return rFib(num-1) + rFib(num-2);  // recursive case
  }
}

console.log(rFib(7)) // 13
