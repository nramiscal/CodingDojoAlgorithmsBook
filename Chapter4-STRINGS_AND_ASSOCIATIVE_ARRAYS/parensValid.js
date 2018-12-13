function parensValid(str){
    var valid = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == "("){
            valid++;
        }
        if (str[i] == ")"){
            valid--;
        }
        if (valid < 0){
            return false;
        }
    }
    if (valid != 0){
        return false;
    }
    else {
        return true;
    }

}

// parensValid("N(0(p)3") // false
// parensValid("Y(3(p)p(3)r)s") // true
parensValid("N(0)t)0(k") // false
