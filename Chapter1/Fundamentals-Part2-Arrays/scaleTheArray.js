function scaleTheArray(arr, num){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}

scaleTheArray([1,2,3,4,5],2)
