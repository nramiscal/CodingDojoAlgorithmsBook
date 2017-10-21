function valsGreaterThanSecondGeneralized(arr){
    var count = 0;
    var arr2 = [];
    if (arr.length < 2){
        return "There is no second value to compare to."
    }
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > arr[1]){
            arr2.push(arr[i]);
            count++;
        }
    }
    console.log("Count is " + count);
    return arr2;
}

valsGreaterThanSecondGeneralized([1])
