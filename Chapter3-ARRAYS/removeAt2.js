// removeAt2() returns the array instead of the removed value
function removeAt2(arr, idx){
    for (var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
    return arr;
}
