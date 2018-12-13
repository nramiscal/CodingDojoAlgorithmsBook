function dropTheMike(str) {
    var newStr = "";
    var mike = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            continue;
        }
        // anytime "M" is found, check if the following letters spell out "Mike"
        if (str[i] === "M" && str[i+1] === "i" && str[i+2] === "k" && str[i+3] === "e") {
            return "stunned silence";
        }
        // capitalize if first letter of word
        else if (str[i-1] === " " || str[i-1] === undefined){
            newStr += str[i].toUpperCase();
        }
        else {
            newStr += str[i];
        }
    }
    console.log(`"${newStr}"`); // in quotes to check if spaces are ignored
    return newStr;
}

// console.log(dropTheMike("  hdjakjhdjh    "));
console.log(dropTheMike("  fhjksjhfdMikehjdkajhs  "));
