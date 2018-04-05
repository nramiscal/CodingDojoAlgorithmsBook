// Matrix Search
//
// Mike digs image recognition and wants to create a JavaScript Imaging
// Library, just like PIL for Python. He is given 2 different two-dimensional
// arrays, containing integers between 0 and 65535. Each two-dimensional
// array represents a gray-scale image, where each integer value is a pixel.
// The second image might be found somewhere within the larger one. Return
// whether it is.
//
// Given array: [[12, 34, 45, 56],
//               [98, 87, 76, 65],
//               [56, 67, 78, 89],
//               [54, 43, 32, 21]]
//
// and array: [[67, 78],
//             [43, 32]]
//
// return true.


function matrixSearch(matrix, sub){
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
                // as soon as we find a complete match, return true
                if (flag){
                    return true;
                }
            }
        }
    }
    return flag;
}


console.log(matrixSearch([[12, 34, 45, 56],[98, 87, 76, 65],[56, 67, 78, 89],[54, 43, 32, 21]], [[67, 78],[43, 32]]));
