function reverseString2(str){
  
  var newStr = "";
  
  for (var i = str.length-1; i >= 0; i--){
    newStr += str[i];
  }
  
  str = newStr;
  return str;
  
}

console.log(reverseString2("creature"));
