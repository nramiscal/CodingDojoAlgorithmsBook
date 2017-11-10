// arr is an array of strings
function removeShorterStrings(arr, len){
    for (var i = 0; i < arr.length; i++){
        if (arr[i].length < len){
            for (var j = i; j < arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr.length--;
            i--; // very important! otherwise will miss values to test
        }
    }
    return arr;
}

removeShorterStrings(["hi", "bye", "hello", "goodbye"], 4)
// ["hello", "goodbye"]
