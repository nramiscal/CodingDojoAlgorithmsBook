// Flatten a given array, eliminating nested & empty arrays.
// Third: make your algorithm both in-place and stable. Do you need a return value? No.


function flatten3(arr){
    for (var i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            // if it's an empty array
            if (arr[i].length < 1){
                for (let j = i; j < arr.length; j++){
                    arr[j] = arr[j+1];
                }
                arr.length--;
                i--;
            }
            else {
                // make space to insert the values into the array
                let shift = arr[i].length - 1;
                for (let j = arr.length-1; j > i; j--){
                    arr[j+shift] = arr[j];
                }
                // move the inner elements into the spaces created
                for (let k = shift; k > 0; k--){
                    arr[i+k] = arr[i][k];
                }
                arr[i] = arr[i][0];
            }
        }
    }
}

let arr = [1,[2,3],4,[],[5,6,7],8,[]];
console.log(arr); // [ 1, [ 2, 3 ], 4, [], [ 5, 6, 7 ], 8, [] ]
flatten3(arr);
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
