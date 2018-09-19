function reverseArray(arr){
    var left = 0;
    var right = arr.length-1;
    var temp;
    while (left < right){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

reverseArray([1,2,3,4,5,6])
