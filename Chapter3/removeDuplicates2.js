// removeDuplicates2() takes in a sorted array and
// removes the nested loop in removeDuplicates()
function removeDuplicates2(arr){
    var arr2 = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i+1] != arr[i]){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

removeDuplicates2([1,1,1,2,2,2,2,3,3,3,3])
