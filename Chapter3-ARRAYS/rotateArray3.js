// allows negative shiftBy (to shift left, not right)
// minimize memory usage, handle arrays/shiftBys in the millions
function rotateArray3(arr, shiftBy){
    var temp;
    var rem = shiftBy % arr.length
    // if shiftBy is a multiple of arr.length, return the array unchanged

    if (shiftBy > 0){
        for (var i = 1; i <= rem; i++){
            temp = arr[arr.length-1];
            for (var j = arr.length-1; j > 0; j--){
                arr[j] = arr[j-1];
            }
            arr[0] = temp;
        }
    }
    else if (shiftBy < 0){
        for (var i = 1; i <= Math.abs(rem); i++){
            temp = arr[0];
            for (var j = 1; j < arr.length; j++){
                arr[j-1] = arr[j];
            }
            arr[arr.length-1] = temp;
        }
    }
    return arr;
}

rotateArray3([1,2,3],-10)
