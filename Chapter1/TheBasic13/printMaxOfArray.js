function printMaxOfArray(arr){
    var max = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    console.log("Max is: " + max);
}

printMaxOfArray([5,7,1,9,20,3])
