function reverseString(str){
    var arr = [];
    var left = 0;
    var right = str.length -1;
    while (left < right){
        arr[left] = str[right];
        arr[right] = str[left];
        left++;
        right--;
    }
    str = arr.join("");
    return str;
}

reverseString("creature")
