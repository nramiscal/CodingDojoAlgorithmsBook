function swapPairs(arr){
    var limit;
    arr.length % 2 != 0?limit = arr.length - 1:limit = arr.length;

    for (var i = 0; i < limit; i+=2){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

swapPairs([1,2,3,4,5])
// swapPairs([1,2,3,4,5,6])
