function reverseArray2(arr){
    var temp;
    for (var i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

reverseArray2([1,2,3,4,5])
