function printMaxMinAvgArrayVals(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }

    console.log("Max is " + max);
    console.log("Min is " + min);
    console.log("Average is " + sum/arr.length);
}

printMaxMinAvgArrayVals([1,2,3,4,5,6,7])
