function minimum(num1,num2) {
if (num1 > num2) return num2;
return num1;
}

// minimum(0,-10); --> -10

function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'B') {
      count++;
    }
  }
  return count;
}

// countBs("BBC"); --> 2

function countChar(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      count++;
    }
  }
  return count;
}

// countChar("kakkerlak", "k") --> 4

function isEven(num) {
  //console.log(num);
  if (num === 0) {return true;}
  else if (num === 1) {return false;}
  else  {return isEven(Math.abs(num - 2));}
}

// isEven(-75); --> false
