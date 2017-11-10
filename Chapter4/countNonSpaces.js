function countNonSpaces(str){
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] !== " "){
            count++
        }
    }
    return count;
}

countNonSpaces("Honey pie, you are driving me crazy") // 29
