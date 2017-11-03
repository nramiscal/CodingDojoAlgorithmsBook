// removeDuplicates() takes in a sorted array
function removeDuplicates(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i+1] == arr[i]){
            for (var j = i; j < arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr.length--;
            i--;
        }
    }
    return arr;
}

removeDuplicates([1,1,1,2,2,2,2,3,3])
