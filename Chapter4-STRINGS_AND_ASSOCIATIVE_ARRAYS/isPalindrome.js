function isPalindrome(str){
    var left = 0;
    var right = str.length - 1;
    while (left < right){
        if (str[left] != str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}


// isPalindrome("racecar") // true
// isPalindrome("a x a") // true
// isPalindrome("Dud") // false
isPalindrome("oho!") // false
