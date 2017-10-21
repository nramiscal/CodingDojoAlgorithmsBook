function swapStringForArrayNegativeVals(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

swapStringForArrayNegativeVals([-3,5,-2,7,1,-4])
