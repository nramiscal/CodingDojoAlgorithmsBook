function shuffle(arr){
    var idx;
    var temp;
    for (var i = 0; i < arr.length; i++){
        idx = Math.trunc(Math.random()*arr.length)
        temp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = temp;
    }
    return arr;
}

shuffle([1,2,3,4,5,6,7,8,9,10])
