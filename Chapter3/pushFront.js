function pushFront(arr, val){
    for (var i = arr.length -1; i >= 0; i--){
        arr[i+1] = arr[i];
    }
    arr[0] = val;
    return arr;
}

pushFront([1,2,3,4,5], 100)
