function nThToLast(arr, n){
    if (arr.length < n){
        return null;
    }
    return arr[arr.length-n];
}

nThToLast([5,2,3,6,4,9,7],3)
