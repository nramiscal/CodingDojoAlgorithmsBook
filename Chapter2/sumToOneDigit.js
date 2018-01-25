// sumToOne recursively  

function sumToOneDigit(num){

        if (num < 10){
            return num;
        }
        var str = num.toString();
        var sum = 0;
        for (var i = 0; i < str.length; i++){
            sum += Number(str[i]);
        }

        return sumToOneDigit(sum);

}

console.log(sumToOneDigit(99))
