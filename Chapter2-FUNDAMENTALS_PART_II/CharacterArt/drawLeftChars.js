function drawLeftChars(num, char){
    var str = "";
    for (var i = 1; i <= num; i++){
        str += char;
    }
    console.log(str);
}

drawLeftChars(10, "A")
