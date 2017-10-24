function mostSignificantDigit(num){

    num = Math.abs(num)

    if (num < 1){
        while(num < 10){
            num = num * 10;
            if (num > 1 && num < 10){
                return Math.trunc(num);
            }
        }
    }
    else if (num > 10){
        while(num > 10){
            num = num / 10;
            if (num > 1 && num < 10){
                return Math.trunc(num);
            }
        }
    }
}

// mostSignificantDigit(12345)
// mostSignificantDigit(67.89)
mostSignificantDigit(-0.00987)
