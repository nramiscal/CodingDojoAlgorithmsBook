/* Union Sorted Arrays (i.e. logical "OR", retains higher count)

Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union . Example: given [1,2,2,2,7] and [2,2,6,6,7] , return [1,2,2,2,6,6,7] . */

function UnionSortedArrays(arr1, arr2){
    var dict = {};
    var newarr = [];

    for (var val of arr1){
        if (val in dict){
            dict[val]['dict1']++;
        }
        else {
            dict[val] = {'dict1': 1, 'dict2': 0};
        }
    }

    for (var val of arr2){
        if (val in dict){
            dict[val]['dict2']++;
        }
        else {
            dict[val] = {'dict1': 0, 'dict2': 1};
        }
    }

    // console.log(dict);

    for (var key in dict){
        if (dict[key]['dict1'] > dict[key]['dict2']){
            for (var i = 0; i < dict[key]['dict1']; i++){
                newarr.push(parseInt(key, 10));
            }
        }
        else {
            for (var i = 0; i < dict[key]['dict2']; i++){
                newarr.push(parseInt(key, 10));
            }
        }
    }

    return newarr;
}

console.log(UnionSortedArrays([1,2,2,2,7],[2,2,6,6,7]))


// [1,2,2,2,6,6,7]
