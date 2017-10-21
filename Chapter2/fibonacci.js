function fibonacci(index){
    var arr = [0,1];

    for (var i = 1; i < index; i++){
        var temp = arr[0];
        arr[0] = arr[1];
        arr[1] = arr[1] + temp;

    }
    return arr[1];
}

fibonacci(7) // returns 13
