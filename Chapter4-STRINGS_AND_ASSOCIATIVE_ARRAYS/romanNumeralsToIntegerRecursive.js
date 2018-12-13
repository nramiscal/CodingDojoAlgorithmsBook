function rRomanToInteger(str){
    let i = 0;
    let num = 0;
    let dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    function helper(str,i){
        if (i >= str.length){
            console.log(num);
            return num;
        }
        else{
            if (dict.hasOwnProperty(str[i])){
                if (dict[str[i+1]] > dict[str[i]]){
                    num -= dict[str[i]];
                }
                else {
                    num += dict[str[i]];
                }
                i++;
                helper(str,i)
            }
            else {
                return "Invalid roman numeral";
            }
        }
    }
    helper(str,i)
}

rRomanToInteger("MCMLIV") // 1954
