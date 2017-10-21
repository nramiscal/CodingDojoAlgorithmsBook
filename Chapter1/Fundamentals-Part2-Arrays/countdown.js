function countdown(num){
    var arr = [];
    for (var i = num; i >= 0; i--){
        arr.push(i);
    }
    console.log(arr.length);
    return arr;
}

countdown(20)
