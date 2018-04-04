// Flatten a given array, eliminating nested & empty arrays.
// Do not alter it; return a new one retaining order.
// For [1,[2,3],4,[]] return [1,2,3,4].


function flatten(arr){
    let newarr = [];
    for (let elem of arr){
        if (typeof(elem) == "number"){
            newarr[newarr.length] = elem;
        }
        else if (Array.isArray(elem)){
            for (let val of elem){
                newarr[newarr.length] = val;
            }
        }
    }
    return newarr;
}

console.log(flatten([1,[2,3],4,[]])); //[ 1, 2, 3, 4 ]
console.log(flatten([1,[2,3],4,[],[5,6,7],8,[]])); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
