function removeRange(arr,start,end){

    for (var j = 1; j < end; j++){
        for (var i = start; i < arr.length; i++){
            arr[i] = arr[i+1];
        }
        arr.length--;
    }

    return arr;
}

removeRange([20,30,40,50,60,70],2,4) // [20,30,70]
