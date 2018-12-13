function removeNegatives(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            for (var j = i; j < arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr.length--;
            i--;
        }
    }
    return arr;
}

removeNegatives([3,6,-2,8,-1,-7,9])
