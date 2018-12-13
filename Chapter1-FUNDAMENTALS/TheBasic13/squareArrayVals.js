function squareArrayVals(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}

squareArrayVals([1,2,3,4,5])
