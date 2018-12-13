function integerToRomanNumerals(num){
    if (num >= 4000 || num < 0){
        return "Please enter a positive integer less than 4000."
    }

    var arr = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ]

    var roman = "";

    // ONE WAY:
    // for (var i = 0; i < arr.length; i++){
    //     if (num >= arr[i][1]){
    //         num -= arr[i][1];
    //         roman += arr[i][0];
    //         i--;
    //     }
    // }

    // ANOTHER WAY:
    for (var i = 0; i < arr.length; i++){
        for (var j = 1; j <= Math.floor(num / arr[i][1]); j++){
            roman += arr[i][0];
        }
        num = num % arr[i][1];
    }

    return roman;

}

// integerToRomanNumerals(1954) // MCMLIV
// integerToRomanNumerals(1990) // MCMXC
// integerToRomanNumerals(2014) // MMXIV
// integerToRomanNumerals(609) // DCIX
integerToRomanNumerals(444) // CDXLIV
