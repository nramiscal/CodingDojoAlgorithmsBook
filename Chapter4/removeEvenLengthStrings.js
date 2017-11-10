// arr is an array of strings
function removeEvenLengthStrings(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i].length % 2 == 0){
            for (var j = i; j < arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr.length--;
            i--;
        }
    }
    return arr;
}

removeEvenLengthStrings(["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)","."])
// ["Nope!", "Its", "Chris", "."]
