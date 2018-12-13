function isPal(str){
    for (var i = 0; i < str.length/2; i++){
        if (str[i] != str[str.length-1-i]){
            return false;
        }
    }
    return true;
}

function longestPal(str){
    var lp = "";
    for (var i = 0; i < str.length-1; i++){
        for (var j = i+1; j <= str.length; j++){
            // console.log(str.slice(i,j));
            if (isPal(str.slice(i,j)) == true){
                if (str.slice(i,j).length > lp.length){
                    lp = str.slice(i,j);
                }
            }
        }
    }
    return lp;
}

console.log(longestPal("Yikes! my favorite racecar erupted!"))
