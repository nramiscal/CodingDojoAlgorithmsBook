function isPal(str){
    for (var i = 0; i < str.length-i; i++){
        if (str[i] != str[str.length-1-i]){
            return false;
        }
    }
    return true;
}

isPal("racecar")
