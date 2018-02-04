function dGetsJiggy(str) {
    var first = str[0];
    var newstr = "";
    for (var i = 1; i < str.length; i++){
        if (i == 1) {
            newstr += str[i].toUpperCase();
        }
        else {
            newstr += str[i];
        }
    }

    return newstr + " to the " + first + "!";

}

console.log(dGetsJiggy("Dylan"));
