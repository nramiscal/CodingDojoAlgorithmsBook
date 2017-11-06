function doubleTrouble(arr){

    for (var i = 0; i < arr.length; i+=2){
        for (var j = arr.length-1; j > i; j--){
            arr[j+1] = arr[j]; // lengthens array by one in the process
        }
        arr[i+1] = arr[i];
    }
    return arr;
}

doubleTrouble([4,"Ulysses",42,false])
// [4, 4, "Ulysses", "Ulysses", 42, 42, false, false]
