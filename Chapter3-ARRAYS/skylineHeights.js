function skylineHeights(arr){
    var max = arr[0];
    var newarr = [];

    for (var i = 1; i < arr.length; i++){
        if (arr[i] > 0){
            if (arr[i] > max){
                newarr.push(arr[i]);
                max = arr[i];
            }
        }
    }
    return newarr;
}


skylineHeights([-1,7,3]) // [7]
skylineHeights([-1,1,1,7,3]) // [1,7]
skylineHeights([0,4]) // [4]
