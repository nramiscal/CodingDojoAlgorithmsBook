function factorial(num){
    var fact = num
    for (var i = num-1; i > 0; i--){
        fact = fact * i;
    }
    return fact;
}

factorial(5)
