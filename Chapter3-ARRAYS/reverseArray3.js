function reverseArray3(arr){
    var temp;
    for (var i = 0; i < arr.length-i; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

reverseArray3([1,2,3,4,5,6])
