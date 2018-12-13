// fibonacci recursively


// F0	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10	F11	F12	F13	F14	F15	F16	F17	F18	F19	F20
// 0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	610	987	1597	2584	4181	6765


function rFib(idx){
  if (idx == 0){
    return 0;
  }
  else if (idx == 1){
    return 1;
  }
  else {
    return rFib(idx-1) + rFib(idx-2);
  }
}


console.log(rFib(13));


