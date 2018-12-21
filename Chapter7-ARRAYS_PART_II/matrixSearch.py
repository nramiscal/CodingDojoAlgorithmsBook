#
# Matrix Search
#
# Mike digs image recognition and wants to create a JavaScript Imaging
# Library, just like PIL for Python. He is given 2 different two-dimensional
# arrays, containing integers between 0 and 65535. Each two-dimensional
# array represents a gray-scale image, where each integer value is a pixel.
# The second image might be found somewhere within the larger one. Return
# whether it is.
#
# Given array: [[12, 34, 45, 56],
#               [98, 87, 76, 65],
#               [56, 67, 78, 89],
#               [54, 43, 32, 21]]
#
# and array: [[67, 78],
#             [43, 32]]
#
# return true.

def matrixSearch(matrix, sub): # matrix[i][j]
    corner = sub[0][0]  # sub[k][l]
    print(f"corner is {sub[0][0]}")

    max_length_inner_sub = len(sub[0])
    for arr in sub:
        if len(arr)> max_length_inner_sub:
            max_length_inner_sub = len(arr)

    print("max_length_inner_sub is", max_length_inner_sub)

    for i in range(len(matrix)-len(sub)+1):
        for j in range(len(matrix[i])-max_length_inner_sub+1):
            print(f"on matrix[{i}][{j}]")
            if matrix[i][j] == corner:
                print(f"match found for corner at matrix[{i}][{j}]: {matrix[i][j]}")
                flag = True
                for k in range(len(sub)):
                    if flag == False:
                        break
                    else:
                        for l in range(len(sub[k])):
                            print(f"comparing matrix[{i+k}][{j+l}]: {matrix[i+k][j+l]} with sub[{k}][{l}]: {sub[k][l]}")
                            if matrix[i+k][j+l] != sub[k][l]:
                                print("not a match, keep looking")
                                flag = False
                                break
                if flag:
                    return (i,j)

    return (-1,-1)




print(matrixSearch([[12, 34, 45, 56, 60, 34],[98, 87, 76, 65, 70, 13],[56, 67, 78, 89, 80, 67],[54, 43, 32, 21, 90, 12], [12, 34, 45, 56, 60, 78], [12, 34, 45, 56, 60, 78]], [[67, 78],[43, 32]]))
