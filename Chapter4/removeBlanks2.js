function removeBlanks2(str){
    var str2 = "";
    for (var i = 0; i < str.length; i++){
        if (str[i] !== " "){
            str2 += str[i];
        }
    }
    str = str2;
    return str;
}

removeBlanks2("Pl      ayTha  tF   u   nkyM      usi   c    .")
