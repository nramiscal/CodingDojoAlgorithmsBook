function swapTowardTheCenter(arr){
    var left = 0;
    var right = arr.length -1;
    while(left < right){
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left+=2;
        right-=2;
    }
    return arr;
}

// swapTowardTheCenter([true, 42, "Ada", 2, "pizza"])
swapTowardTheCenter([1,2,3,4,5,6])
