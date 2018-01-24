function sumToOneDigit(num){

    function helper(num){
        if (num < 10){
            return num;
        }
        var str = num.toString();
        var sum = 0;
        for (var i = 0; i < str.length; i++){
            sum += Number(str[i]);
        }
        return helper(sum);
    }

    return helper(num);
}

console.log(sumToOneDigit(7112124)) // returns 9
