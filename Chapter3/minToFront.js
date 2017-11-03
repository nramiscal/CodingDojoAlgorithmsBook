function removeAt2(arr, idx){
    for (var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
    return arr;
}

function insertAt(arr, idx, val){
    for (var i = arr.length -1; i >= idx; i--){
        arr[i+1] = arr[i];
    }
    arr[idx] = val;
    return arr;
}

function minToFront(arr){
    var min = arr[0];
    var m; // m == index of minimum value
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            m = i;
        }
    }

    arr = removeAt2(arr,m);
    return insertAt(arr,0,min);
}

minToFront([4,2,1,3,5]) // [1,4,2,3,5]
