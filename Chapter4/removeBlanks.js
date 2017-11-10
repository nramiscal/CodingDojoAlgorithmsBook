function removeBlanks(str){
    var arr = str.split("");
    var newarr = [];

    for (var i = 0; i < arr.length; i++){
        if (arr[i] !== " "){
            newarr.push(arr[i]);
        }
    }
    str = newarr.join("");
    return str;
}

removeBlanks("Pl      ayTha  tF   u   nkyM      usi   c    .")
