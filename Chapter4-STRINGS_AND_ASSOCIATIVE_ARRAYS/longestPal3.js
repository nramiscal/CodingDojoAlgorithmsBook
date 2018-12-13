function longPal(str){
  var long = str[0];
  for (var left = 0; left < str.length - 1; left++){
    for (var len = 2; len < str.length; len ++){
      for (var i = left; i < len/2; i++){
        if (str[i] != str[len-(i+1)]){
          break;
        }
        if (len -1 > long.length){
          long = str.substring(left, len);
        }
      }
    }
  }
  return long;
}

longPal("dadadada")
