function popFront(arr){
    var temp = arr[0];
    for (var i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
    console.log(arr);
    return temp;
}

popFront([1,2,3,4,5])
