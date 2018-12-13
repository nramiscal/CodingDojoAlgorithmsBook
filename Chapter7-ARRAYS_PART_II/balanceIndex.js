// Here, a balance point is on an index, not between indices.
// Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2 , but [9,9] → -1
function balanceIndex(arr){
    var total = arr[0];
    var sub = arr[0];
    for (var i = 1; i < arr.length; i++){
        total += arr[i];
    }
    for (var i = 1; i < arr.length-1 ; i++){
        if (sub === total-sub-arr[i]){
            return i;
        }
        sub += arr[i];
    }
    return -1;

}

// console.log(balanceIndex([-2,5,7,0,3])); // 2
// console.log(balanceIndex([9,9])); // -1
console.log(balanceIndex([5,5,5,5,7,7,7,5,4,4,4,1,1,1,0,0,0,61])); // 14
