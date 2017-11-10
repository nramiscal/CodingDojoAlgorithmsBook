function romanToInteger(str){
    let dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let num = 0;
    for (let i = 0; i < str.length; i++){
        if (dict.hasOwnProperty(str[i])){
            if (dict[str[i+1]] > dict[str[i]]){
                num -= dict[str[i]];
            }
            else {
                num += dict[str[i]];
            }
        }
        else {
            return "Invalid roman numeral";
        }
    }
    return num;
}

// romanToInteger("MCMLIV") // 1954
// romanToInteger("MCMXC")  // 1990
// romanToInteger("MMXIV") // 2014
// romanToInteger("DCIX") // 609
// romanToInteger("CDXLIV") // 444
// romanToInteger("MXDII") // 1492 (not 1512)
romanToInteger("CCCIL") // 349 (not 351)
