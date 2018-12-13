// Array: Binary Search
//
// Given a sorted array and a value, return whether the array contains that
// value. Do not sequentially iterate the array. Instead, ‘divide and
// conquer’, taking advantage of the fact that the array is sorted.
// As always, only use built-in functions that you are prepared to
// recreate (write yourself) on demand!

function binarySearch(arr, val){

    // fast-fail if empty array or only element doesn't match
    if (arr.length <= 1 && arr[0] !== val){
        console.log(`Fast-failed. ${val} is not in the array.`);
        return false;
    }

    var idx;
    var num;
    var newarr;

    while (arr.length > 0){
        idx = Math.floor(arr.length/2);
        num = arr[idx];
        newarr = [];

        // console.log(arr);
        // console.log("idx: " + idx + " num: " + num + " val: " + val);

        if (num === val){
            console.log(`${num} is in the array.`);
            return true;
        }
        else if (val < num){
            for (var i = 0; i < idx; i++){
                newarr[newarr.length] = arr[i];
            }
            arr = newarr;
        }
        else if (val > num){
            for (var i = idx + 1; i < arr.length; i++){
                newarr[newarr.length] = arr[i];
            }
            arr = newarr;
        }
    }

    console.log(`${val} is not in the array.`)
    return false;

}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 2)); // 2 is in the array.  true
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 10)); // 10 is not in the array.  false
console.log(binarySearch([], 90)); // Fast-failed. 90 is not in the array.  false
console.log(binarySearch([2], 20)); // Fast-failed. 20 is not in the array.  false
