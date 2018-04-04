// Matrix Search
//
// Given array: [[12, 34, 45, 56],
//               [98, 87, 76, 65],
//               [56, 67, 78, 89],
//               [54, 43, 32, 21]]
// and array: [[67, 78],
//             [43, 32]]
// return true.
//
// Second: Return location of first match found ( [-1,-1] if no match). In example above, return [2,1].



function matrixSearch2(matrix, sub){
    let corner = sub[0][0];
    let flag = false;

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] == corner){
                flag = true;

                // as soon as we match corner, start checking adjacent values
                // we have a match at matrix[i][j] with sub[k=0][l=0]
                for (let k = 0; k < sub.length; k++){
                    for (let l = 0; l < sub[k].length; l++){

                        // only check if valid index in matrix
                        if (i+k < matrix.length &&  j+l < matrix[i].length){
                            if (sub[k][l] !== matrix[i+k][j+l]){
                                flag = false;
                                break;
                            }
                        }
                        // if sub would extend past boundaries of matrix, reset flag to false
                        else {
                            flag = false;
                        }
                    }
                }
                // as soon as we find a perfect match, return true
                if (flag){
                    return [i,j];
                }
            }
        }
    }
    return [-1,-1];
}


console.log(matrixSearch2([[12, 34, 45, 56],[98, 87, 76, 65],[56, 67, 78, 89],[54, 43, 32, 21]], [[65, 78],[43, 32]]));
