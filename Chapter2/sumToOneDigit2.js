// sumToOne iteratively

function sumToOneDigit2(num){

        while (num >= 10) {
          var str = num.toString();
          var sum = 0;
          for (var i = 0; i < str.length; i++){
            sum += Number(str[i]);
          }
          num = sum;
        }

        return num;

}

console.log(sumToOneDigit2(111111111111))
