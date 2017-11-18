function bracesValid(str){
    var parens = 0;
    var brace = 0;
    var bracket = 0;
    var arr = [];

    for (var i = 0; i < str.length; i++){
        switch(str[i]){
            case "(":
                parens++;
                arr.push(str[i]);
                break;
            case ")":
                parens--;
                if (arr[arr.length-1] == "("){
                    arr.pop();
                }
                break;
            case "{":
                brace++;
                arr.push(str[i]);
                break;
            case "}":
                brace--;
                if (arr[arr.length-1] == "{"){
                    arr.pop();
                }
                break;
            case "[":
                bracket++;
                arr.push(str[i]);
                break;
            case "]":
                bracket--;
                if (arr[arr.length-1] == "["){
                    arr.pop();
                }
                break;
        }
        if (parens < 0 || brace < 0 || bracket < 0){
            console.log("premature closing symbol");
            return false; // 1
        }
    }
    if (parens != 0 || brace != 0 || bracket != 0){
        console.log("unclosed opening symbol/s");
        return false; // 2
    }
    else if (arr.length > 0){;
        console.log("symbols not in valid order");
        return false; // 3
    }
    else {
        console.log("parens == brace == bracket == arr.length == 0");
        return true; // 4
    }
}

// bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!") // true 4
// bracesValid("D(i{a}1[ t]o)n{e") // false 2
// bracesValid("A(1)s[0(n]0{t) 0}k") // false 3
// bracesValid("(){}[]") // true 4
// bracesValid("(}") // false 1
// bracesValid("[(])") // false 3
// bracesValid("()[(])") // false 3
bracesValid("{}[[(({({{}}})[))]]]") // false 3
