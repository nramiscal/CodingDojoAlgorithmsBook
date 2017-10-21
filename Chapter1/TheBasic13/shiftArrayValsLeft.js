function shiftArrayValsLeft(arr){
    for (var i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    return arr;
}

shiftArrayValsLeft([1,2,3,4,5])
