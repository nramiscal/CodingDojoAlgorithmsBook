function biggieSize(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}

biggieSize([-1,3,5,-5]) // [-1, "big", "big", -5]
