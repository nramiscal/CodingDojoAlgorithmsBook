// Recursive “Tribonacci”

// Write function rTrib(num) to mimic Fibonacci, adding previous
// three values instead of two . First three Tribonacci numbers
// are 0, 0, 1, so
// rTrib(3) = 1 (0+0+1)
// rTrib(4) = 2 (0+1+1)
// rTrib(5) = 4 (1+1+2)
// rTrib(6) = 7 (1+2+4)
// Handle negatives and non-integers appropriately and inexpensively.


function rTrib(num){
  if (num <= 0 || num == 1){
    return 0;
  }
  else if (num == 2){
    return 1;
  }
  else {
    return rTrib(Math.trunc(num)-1) + rTrib(Math.trunc(num)-2) + rTrib(Math.trunc(num)-3);
  }
}

console.log(rTrib(6.5));
