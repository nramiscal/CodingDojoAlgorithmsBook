function isCreditCardValid(digitArr){

    var lastDigit = digitArr.pop();
    var sum = 0;

    for (var i = digitArr.length-1; i > 0; i-=2){
        digitArr[i] = digitArr[i]*2;
    }

    for (var i = 0; i < digitArr.length; i++){
        if (digitArr[i] > 9){
            digitArr[i] -= 9;
        }
        sum += digitArr[i];
    }

    sum += lastDigit;

    if (sum % 10 == 0){
        return true;
    }
    else {
        return false;
    }
    
}

isCreditCardValid([5,2,2,8,2])
