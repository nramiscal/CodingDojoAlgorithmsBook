function drawRightChars(num, char){
    var str = "";
    for (var i = 1; i <= 75-num; i++){
        str += ' ';
    }
    for (var i = 1; i <= num; i++){
        str += char;
    }
    console.log(str);
}

drawRightChars(20, "Q")
