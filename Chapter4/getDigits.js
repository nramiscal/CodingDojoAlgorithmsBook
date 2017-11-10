function getDigits(str){
    var numStr = "";
    for (var i = 0; i < str.length; i++){
        switch (str[i]){
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                numStr += str[i];
        }
    }
    numStr = Number(numStr);
    return numStr;
}

getDigits("0d8b6h2v68dj2bg649bkvx6t85ng96")
