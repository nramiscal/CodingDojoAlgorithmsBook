// Flatten a given array, eliminating nested & empty arrays.
// Second: work ‘in-place’ in the given array (do not create another).
// Alter order if needed. Ex.: [1,[2,3],4,[]] could become [1,3,4,2].


function flatten2(arr){
    // use a for loop with i = 0 instead of for-in so can decrement i in case of empty arrays
    // a for-in loop would go through each index once and only once
    for (let i = 0; i < arr.length; i++){
        // if arr[i] is an array
        if (Array.isArray(arr[i])){
            // if arr[i] is an empty array, remove it
            if (arr[i].length < 1){
                for (let j = i; j < arr.length; j++){
                    arr[j] = arr[j+1];
                }
                arr.length--;
                i--;
            }
            else {
                // iterate through arr[i]
                for (let idx in arr[i]){
                    // if last element of arr[i], replace arr[i] with last element
                    if (idx == arr[i].length-1){
                        arr[i] = arr[i][idx];
                    }
                    // else move element to the end of arr
                    else {
                        arr[arr.length] = arr[i][idx];
                    }
                }
            }
        }
    }
    return arr;
}

console.log(flatten2([1,[2,3],4,[],[5,6,7],8,[]])); // [ 1, 3, 4, 7, 8, 2, 5, 6 ]
