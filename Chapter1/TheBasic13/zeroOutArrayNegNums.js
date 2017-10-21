function zeroOutArrayNegNums(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

zeroOutArrayNegNums([8,-3,4,-6,1,5,-5])
