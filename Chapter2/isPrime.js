function isPrime(num){
    for (var i = num-1; i > 1; i--){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

function testIsPrime(numTimes){
    var arr = [];
    var primeVals = [];
    for (var x = 2; x <=numTimes; x++){
        arr.push(x);
    }

    for (var j = 0; j < arr.length; j++){
        if (isPrime(arr[j])){
            primeVals.push(arr[j]);
        };
    }
    return primeVals;
}

testIsPrime(100)

// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
