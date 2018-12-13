function extractDigit(num, digitNum){
    console.log(Math.floor(Math.abs(num)/Math.pow(10,digitNum))%10)
}

extractDigit(-123.45,-1)
