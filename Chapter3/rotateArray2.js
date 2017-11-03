// allows negative shiftBy (to shift left, not right)
function rotateArray2(arr, shiftBy){
    var temp;
    if (shiftBy > 0){
        for (var i = 1; i <= shiftBy; i++){
            temp = arr[arr.length-1];
            for (var j = arr.length-1; j > 0; j--){
                arr[j] = arr[j-1];
            }
            arr[0] = temp;
        }
    }
    else if (shiftBy < 0){
        for (var i = 1; i <= Math.abs(shiftBy); i++){
            temp = arr[0];
            for (var j = 1; j < arr.length; j++){
                arr[j-1] = arr[j];
            }
            arr[arr.length-1] = temp;
        }
    }
    return arr;
}

rotateArray2([1,2,3],-1) // [2,3,1]
