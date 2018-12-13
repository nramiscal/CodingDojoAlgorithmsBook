function acronyms(str){
    var str2 = "";
    for (var i = 0; i < str.length-1; i++){
        if (str[i+1] !== " " && str[i] == " "){
            str2 += str[i+1].toUpperCase();
        }
    }
    str = str2;
    return str;
}

acronyms(" live from new york, it's saturday night!") // "LFNYISN"
