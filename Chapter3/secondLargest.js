function secondLargest(arr){
    var max = arr[0];
    var sl = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    for (var i = 0; i < arr.length; i++){
        if ((arr[i] < max) && arr[i] != max){
            sl = arr[i];
            break;
        }
    }
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > sl && arr[i] != max){
            sl = arr[i];
        }
    }
    return sl;
}

secondLargest([42,1,4,Math.PI,7,10,4,9,2])
