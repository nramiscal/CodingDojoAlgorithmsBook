function isWordAlphabetical(str) {
    for (var i = 0; i < str.length-1; i++){
        if (str[i] > str[i+1]) {
            return false;
        }
    }
    return true;
}

// console.log(isWordAlphabetical("fhlnqtwz")); // true
console.log(isWordAlphabetical("zfhlnqtw")); // false
