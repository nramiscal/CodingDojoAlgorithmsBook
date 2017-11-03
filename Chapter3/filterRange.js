function removeAt2(arr, idx){
    for (var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
    return arr;
}

function filterRange(arr, min, max){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min || arr[i] > max){
            removeAt2(arr, i);
            i--;
        }
    }
    return arr;
}

filterRange([5,2,7,9,2,1,4,5,3],3,7)
